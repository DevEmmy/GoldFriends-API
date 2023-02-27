const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config
const bodyParser = require('body-parser')
const userRouter = require("./routes/userRoutes")
const propertyRouter = require("./routes/propertyRoutes")
const requestRouter = require("./routes/requestRoutes")


//initiate express
const app = express();

//activate cors
app.use(
    cors({
        origin: "*"
    })
)

const port = process.env.PORT || 9099
const uri = "mongodb://127.0.0.1:27017/gf"

// process.env.DB_URI 
// connect mongodb
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})

app.use(bodyParser.json({limit:"50mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"50mb", extended: false}));

app.use("/users", userRouter);
app.use("/property", propertyRouter);
app.use("/request", requestRouter)

//run server
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})