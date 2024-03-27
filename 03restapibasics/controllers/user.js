const userModel = require("../models/user")

async function handleGetAllUsers(req, res) {
    const allDBUser = await userModel.find({})
    return res.json(allDBUser)
}

async function handleGetUserById(req, res){
    const id = Number(req.params.id)
    const userFound = await userModel.findById(id)
    if(!userFound) res.status(404).json({error: `User with id ${id} not found`})
    return res.json(userFound)
}

async function handleDeleteUserById(req, res) {
    const id = Number(req.params.id)
    const userFound = await userModel.findByIdAndDelete(id)
    return res.json({msg: 'Deleted successfully', id})
}

async function handleUpdateUserById(req, res) {
    const id = Number(req.params.id)
    const userFound = await userModel.findByIdAndUpdate(id, {last_name: 'Changed'})
    return res.json({msg: 'Updated successfully', id})
}

async function handleCreateUser(req, res) {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        res.status(400).json({error: 'Few fields are missing'})
    }
    const result = userModel.create({
        first_name: body.first_name,
        last_name: body.last_name,
        job_title: body.job_title,
        email: body.email,
        gender: body.gender
    })
    console.log(req.body);
    res.status(201).json({msg: 'success', id: result.id})
}

module.exports = {handleGetAllUsers, handleGetUserById, handleCreateUser, handleDeleteUserById, handleUpdateUserById}