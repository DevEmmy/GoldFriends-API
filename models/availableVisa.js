const {Schema} = require("mongoose");
const mongoose = require("mongoose")

const schema = new Schema({
    country: String,
    description: String,
    image: {type:String, default: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg"}
})

const Visa = mongoose.model("Visa", schema)
module.exports = Visa