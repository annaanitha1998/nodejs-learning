const express = require('express');
const { registerUser, loginUser, getUserDetails, userProfile, userFavorite } = require('../controller/user');
const {validateToken} = require('../utils/middleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user-details', validateToken, getUserDetails);
router.get('/profile', validateToken, userProfile);
router.get('/favorite', validateToken, userFavorite)

module.exports = router