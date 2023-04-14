const Visa = require("../models/availableVisa")
const { upload } = require("./cloudinary")

const getAll = async (req, res)=>{
    try{
        let result = await Visa.find()
        res.json(result)
    }
    catch(err){
        res.json(err.message)
    }
}

const createVisa = async (req, res)=>{
    try{
        let content = req.body;
        let image = await upload(content.image)
        content.image = image[0]
        let result = new Visa(content)
        result = await result.save()
        res.json(result)
    }
    catch(err){
        res.json(err.message)
    }
}

const deleteVisa = async (req, res)=>{
    try{
        let {id} = req.params;
        let result = await Visa.findByIdAndDelete(id)
        res.json("Deleted")
    }
    catch(err){
        res.json(err.message)
    }
}

module.exports = {
    getAll, createVisa, deleteVisa
}