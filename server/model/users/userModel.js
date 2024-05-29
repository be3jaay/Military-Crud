const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email already exists"]
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"]
    },
    profilePicture: {
        type: String, // Assuming you store the file name or URL
        default: null // Set default value to null
    },
    resetToken: {
        type: String,
        default: null
    },
    resetTokenExpiry: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model("User", UserSchema);