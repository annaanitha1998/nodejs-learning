const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../controller/user')

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user-details', getUserDetails);

module.exports = router