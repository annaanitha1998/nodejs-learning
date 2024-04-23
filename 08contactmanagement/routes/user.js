const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../controller/user');
const validateToken = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user-details', validateToken, getUserDetails);

module.exports = router