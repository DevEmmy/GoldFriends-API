const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const user = new Schema({
    email : {type: String},
    password: {type: String},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    phoneNumber: String,
    isStaff: {type: Boolean, default: false},
    profilePicture: {type: String, default: "https://i.cbc.ca/1.5288498.1568827928!/fileImage/httpImage/baltimore-oriole.jpg"}
},{
    timestamps: true
})

const User = mongoose.model("User", user);
module.exports = User;