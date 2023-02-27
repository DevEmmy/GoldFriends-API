const Property = require("../models/property.models")

const getAllProperties = (req, res)=>{
    Property.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

const getAProperty = (req, res)=>{
    const {id} = req.params;
    Property.findById(id)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

const createAList = (req, res)=>{
    const details = req.body
    new Property(details).save()
    .then(resp => res.json({
        message: "Successful",
        property: resp
    }))
    .catch(err => res.json(
        {err:err,
        message: "An error occured"
        }
    ))
}

const deleteAList = (req, res)=>{
    const {id} = req.params;
    Property.findByIdAndDelete(id)
    .then(resp => res.json({
        message:"Property Deleted Successfully"
    }))
    .catch(err => res.json(
        {
            err: err,
            message: "An error occured"
        }
        ))
}

const updateAProperty = (req, res)=>{
    const {id} = req.params;
    const update = req.body
    Property.findByIdAndUpdate(id, update, {new: true})
    .then(resp => res.json({
        message:"Property Updated Successfully"
    }))
    .catch(err => res.json(
        {
            err: err,
            message: "An error occured"
        }
        ))
}

module.exports = {
    getAllProperties, getAProperty, createAList, deleteAList, updateAProperty
}