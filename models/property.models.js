const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const property = new Schema({
    title: String,
    images: [{type: String}],
    location: String,
    isAvailable: {type: Boolean, default: true},
    description: {type: String},
    videos: [{type: String}],
},{
    timestamps: true
})

const Property = mongoose.model("Property", property)
module.exports = Property