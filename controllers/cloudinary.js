const cloudinary = require("cloudinary").v2
require("dotenv").config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
  });

  const upload = async (images, option) => {
    let i = 0;
    const ims = []
    console.log(images.length)
    while (i < images.length) {
        console.log("working")
        if(images[i].base64){
            // images[i].base64= upscalerFunction(images[i].base64)
            await cloudinary.uploader.upload(images[i].base64, option)
            .then(resp => {
            ims.push(resp.secure_url)
            console.log("done")
            })
            .catch(err => console.log("err"))
        }
        else{
            ims.push(images[i])
        }
        
        i++
    }
    return ims
}

  module.exports = {cloudinary, upload}