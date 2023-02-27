const Request = require("../models/request.models")

const createRequest = async (req, res)=>{
    const content = req.body;
    const loggedUser = req.user;

    if(loggedUser){
        content.user = loggedUser._id
    }
    new Request(content).save()
    .then(response => res.json("Sent successfully"))
    .catch(err => res.json(err))
}

const getAllRequest = async (req, res)=>{
    Request.find()
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports = {createRequest, getAllRequest}