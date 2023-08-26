import  cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import multer from "multer";
import {upload} from '../helper/multer'
dotenv.config()
cloudinary.v2;
cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

export  const uploadToCloud =async (file,res)=>{
    try{
    const galer =await cloudinary.uploader.upload(file.path,{
        folder: 'image',
        user_filename:true
    })
    return galer
}catch(Error){
    return res.status(500).json({
        message: 'failed',
        error : Error.message
    })
}
}