const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const request = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    message: String,
    name: String,
    email: String,
    phoneNumber: String
})

const Request = mongoose.model("Request", request);
module.exports = Request;