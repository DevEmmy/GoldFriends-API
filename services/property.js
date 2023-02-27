const Property = require("../models/property.models");

const saveProperty = (property)=>{
    let newProperty = new Property(property)
    newProperty.save();
    try{
        return newProperty
    }
    catch{
        return "An error occured"
    }
}

module.exports = {
    saveProperty
}