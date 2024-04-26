const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt')
const {UserModel} = require('../database')
const {APP_SECRET} = require('../config')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async (req, res) => {
    const {username, password, email} = req.body;
    if(!username || !password || !email) {
        res.status(400)
        throw new Error('Please enter all the mandatory field')
    }
    const userAvailable = await UserModel.findOne({email})
    if(userAvailable) {
        res.status(400)
        throw new Error('Please enter new user details')
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log('Hashed password', hashedPassword)
    const user = await UserModel.create({
        username,
        password: hashedPassword,
        email
    })
    if(user) {
        res.status(200).json({_id: user._id, email: user.email});
    } else {
        res.status(400)
        throw new Error('User data is not valid')
    }
    
});

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400)
        throw new Error('Please enter all the mandatory fields')
    }
    const user = await UserModel.findOne({email})
    if(user && await bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(
            {
                email: user.email,
                id: user.id,
                username: user.username
            },
            APP_SECRET,
            {
                expiresIn: '15m'
            }
        )
        res.status(200).json({accessToken})
    } else {
        res.status(401)
        throw new Error('email id or password is not valid')
    }
});

const getUserDetails = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

const userProfile = asyncHandler(async(req, res) => {
    const { id } = req.user;
    const userProfile = await UserModel.findById(id);
    if (!userProfile) {
      res.status(400);
      throw new Error("User not found");
    }
    res.status(200).json(userProfile);
})

const userFavorite = asyncHandler(async(req, res) => {
    const { id } = req.user;
    console.log("The user ID is :", id);
    const userProfile = await UserModel.findById(id).populate("favourite");
    console.log("The user profile is : ", userProfile);
    if (!userProfile) {
      res.status(400);
      throw new Error("User not found");
    }
    res.status(200).json(userProfile.favourite);
})

module.exports = { registerUser, loginUser, getUserDetails, userProfile, userFavorite }