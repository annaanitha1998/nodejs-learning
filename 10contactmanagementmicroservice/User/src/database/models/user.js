const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter the user name']
        },
        password: {
            type: String,
            required: [true, 'Please enter the password']
        },
        email: {
            type: String,
            required: [true, 'Please enter the email'],
            unique: [true, 'Email already taken']
        },
        contact: [
            {
              _id: { type: String, require: true },
              name: { type: String, require: true },
            },
          ],
          favourite: [
            {
              _id: { type: String, require: true },
              name: { type: String, require: true },
              email: { type: String, require: true },
              phone: { type: String, require: true },
              date: { type: Date, default: Date.now() },
            },
          ],
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)