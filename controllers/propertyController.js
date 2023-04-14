const Property = require("../models/property.models");
const { upload } = require("./cloudinary");

const getAllProperties = async (req, res)=>{
    await Property.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

const getAProperty = (req, res)=>{
    const {id} = req.params;
    Property.findById(id)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

const createAList = async (req, res)=>{
    const details = req.body
    details.images.length > 0 && (details.images = await upload(details.images))
    details.videos.length > 0 && 
    (details.videos = await upload(details.videos, {
        resource_type: "video",
        format: "mp4"
    }))
    
    await new Property(details).save()
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

const deleteAList = async (req, res)=>{
    const {id} = req.params;
    await Property.findByIdAndDelete(id)
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