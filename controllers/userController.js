const bcrypt = require("bcrypt");
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const { saveUser2 } = require("../services/users");
require("dotenv").config()

// using secret key from json
const jwt_secret = process.env.JWT_SECRET;


const signIn = async (req, res)=>{
    const {email, password} = req.body;
    await User.findOne({email})
    .then(user=>{
        // console.log(email)
        if(!user){
            res.status(400).json({message: "There is no user with this Email"})
        }
        else{
            bcrypt.compare(password, user.password)
            .then(doMatch =>{
                if(doMatch){
                    const token = jwt.sign({_id: user._id}, jwt_secret)
                    res.json({token: token, message: "Signed In Successfully", user: user})
                }
                else{
                    res.status(403).json({message: "Wrong Password"})
                }
            })
        }
    })
    .catch(err => res.status(400).json(err))
}

const signUp = async (req, res)=>{
    const userDetails = req.body;
    const {password} = req.body
    User.findOne({email: userDetails.email})
    .then(resp =>{
        if(!resp){
            
            bcrypt.hash(password, 8)
    .then(hashedPassword => {
        userDetails.password = hashedPassword;
        userDetails.isStaff = false;
        new User(userDetails).save()
        .then(resp =>{
            User.findById(resp._id)
            .then(user=>{
                if(!user){
                    res.json({message: "An Error Occured"})
                }
                else{
                    bcrypt.compare(password, user.password)
                    .then(doMatch=>{
                        if(doMatch){
                            const token = jwt.sign({_id:user._id}, jwt_secret);
                            res.json({token: token, message:"Successful", user: user})
                        }
                        else{
                            res.json({message: "Wrong Password"})
                        }
                    })
                }
            })
        })
        .catch(err => res.status(400).json({
            error: err, 
            message: "An Error Occured here"
        }))
    }).catch(err => res.status(400).json({
        error: err, 
        message: "An Error Occured here"
    }))
    }
    else{
        res.status(403).json({message: "This email is attached to an account"})
    }

}).catch(err => res.status(400).json(err))
}

const getAllUsers = (req, res)=>{
    User.find()
    .then(resp => {
        res.json({
            noOfUsers: resp.length,
            users: resp
        })
    })
    .catch(err => res.json({
        err: err,
        message: "An error occured"
    }))
}

const makeUserAnAdmin = (req, res) => {
    const {userId} = req.params;
    if(req.user.isStaff = true){
        User.findById(userId).then(user => {
            user.isStaff = true;
            User.findByIdAndUpdate(userId, user, {new: true})
            .then(resp => {
                res.json({
                    message: "Succesful",
                    user: resp
                })
            })
        })
        .then(err => {
            res.json({
                error: err,
                message: "User does not exist"
            })
        })
    }
    else{
        res.json({
            message: "You're not a staff!"
        })
    }
}

module.exports = {
    signIn, signUp, getAllUsers, makeUserAnAdmin
}