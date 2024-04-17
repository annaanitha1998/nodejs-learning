const asyncHandler = require('express-async-handler')
const express = require('express')

const {
    getContacts,
    addContacts,
    getContactById,
    updateContact, 
    deleteContact
} = require('../controller/contact')

const routes = express.Router()

routes.route("/").get(asyncHandler(getContacts)).post(asyncHandler(addContacts))

routes.route("/:id").get(asyncHandler(getContactById)).put(asyncHandler(updateContact)).delete(asyncHandler(deleteContact))

module.exports = routes