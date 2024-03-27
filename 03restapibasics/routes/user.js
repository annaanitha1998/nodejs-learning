const express = require('express')
const { handleGetAllUsers, handleGetUserById, handleCreateUser, handleDeleteUserById, handleUpdateUserById } = require('../controllers/user')

const router = express.Router()

router.route('/')
.get(handleGetAllUsers)
.post(handleCreateUser)

router.route('/:id')
.get(handleGetUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUserById)

module.exports = router