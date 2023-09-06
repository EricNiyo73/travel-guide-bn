import cardmodel from '../model/card_model'
import comment_model  from '../model/comment_model';
import { getall, postgallery } from "../controllers/gallery_controller";
import  cloudinary from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const  createcard = async(req,res) => {
    const urls = [];
    try{
        const files = req.files;
      for (const file of files) {
  
        console.log(file);
        const file_cloud = await cloudinary.v2.uploader.upload(file.path,{
          resource_type:"auto",
          folder:"travel_tour_gallery"
        })
        urls.push(file_cloud.secure_url);
        }


        
        const newcard =  new cardmodel({
            image: urls,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            comment: req.body.comment,
            // title:req.body.title,

            
        })
        await newcard.save();
        return res.status(201).json({
            message: "created",
            card: newcard
        })
    }catch(err){
        console.error(err);             
        return res.status(500).json({
            message:"not created",
            error: err.message
        })
    }
}

export const getall_cards = async (req,res) =>{
    const gallery = await cardmodel.find();
    return res.status(200).json({
        gallery: gallery
    })
}




export const createComment = async (req, res) => {
    try {
      const post = await cardmodel.findById(req.params.id);
      if (!post) {
        return res.status(400).json({
          status: "failed",
          message: "Post you are wishing to comment on doesn't exist",
        });
      }
      const comment = new comment_model({
        firstName: req.user.firstName,
        comment: req.body.comment,
      });
      post.comments.push(comment);
      await post.save();
      return res.status(201).json({
        status: "success",
        message: "comment created successfully",
        comment,
      });
    } catch (error) {
      return res.status(400).json({
        status: "success",
        error: error,
      });
    }
  };