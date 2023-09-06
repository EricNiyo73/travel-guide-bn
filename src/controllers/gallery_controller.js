import gallery_model from "../model/gallery_model";
import  cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const postgallery  = async (req,res) =>{
    const urls = [];
    try{
       
       
        const files = req.files;
      for (const file of files) {
  
        console.log(file);
        // const newPath = await uploads(file,"travel_tour_gallery");
        const file_cloud = await cloudinary.v2.uploader.upload(file.path,{
          resource_type:"auto",
          folder:"travel_tour_gallery"
        })
        urls.push(file_cloud.secure_url);
        }
       
    // //////////===========uploading to momgodb database===========\\\\\\\\\\\\\\\\\
    
        const newgallery =  new gallery_model({
            photo: urls
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


export const getall = async (req,res) =>{
    const gallery = await gallery_model.find();
    return res.status(200).json({
        gallery: gallery
    })
}