import  cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import multer from "multer";
import {upload} from '../helper/multer'
dotenv.config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


export const uploadToCloud =async (req, res) =>{


const urls = [];

try {
    // if (req.method === 'POST') {
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
      
      res.status(200).json({
        message: 'Image uploaded successfully',
        data: urls,
      });
    // } else {
    //   res.status(405).json({
    //     err: 'Image was not uploaded successfully',
    //   });
    // }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error:true,
        message:error.message
      });
    }
}