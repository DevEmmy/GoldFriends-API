const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const schema = new Schema({
    country: String,
    description: String,
    image: String
})

const Visa = mongoose.model("Visa", schema)
module.exports = Visa