import { uploadToCloud } from "../helper/cloud";
import gallery_model from "../model/gallery_model";

// const path = require('node:path');
import path from "path";
// import {upload} from '../helper/multer'


export const postgallery  = async (req,res) =>{
    try{
        console.log(req.body,req.file);
        const result =   await uploadToCloud(req.file,res);
        const newgallery =  new gallery_model({
            photo: result.secure_url
            // video: result.secure_url
        })
        await newgallery.save();
        return res.status(201).json({
            message: "created",
            gallery: newgallery
        })
    }catch(err){
        return res.status(500).json({
            statusbar: "failed",
            err: err.message
        })
    }
}