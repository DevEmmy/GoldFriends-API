const User = require("../models/user.models");

const saveUser1 = (user, res)=>{
    const newUser = new User(user)
    try{
        newUser.save()
        res.status(200).json({
            message: "Account Created!"
        })
    }
    catch(err){
        res.status(400).json({
            message: "An Error Occcured",
            error: err
        })
    }
}

const saveUser2 = (user)=>{
    const newUser = new User(user);
    newUser.save()
    try{
        return newUser
    }
    catch{
        return "An error occured"
    }
}


module.exports = {
    saveUser1, saveUser2
}