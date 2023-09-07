import user_model from "../model/user_model"; 
import { Router } from "express";
import bcrypt from "bcrypt"
const router = Router();
import jwt from "jsonwebtoken";
const signToken = (id) => { return jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: "4h", }); };

export const signup= async(req,res) =>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPasswords = await bcrypt.hash(req.body.password, salt);
    const existEmail = await user_model.findOne({email: req.body.email});
    // const user = await user_model.create(req.body);
    // const token = signToken(user._id);
    
    if (existEmail){
        return res.status(409).json({
            message: "email already exist"
        });
    }
    else{
        console.log(res)
        const new_user = new user_model({
            
                firstName: req.body.firstName,
                 lastName: req.body.lastName   ,
                 gender: req.body.gender,
                 nationality: req.body.nationality,
                 phone: req.body.phone,
                 role:  req.body.role,
                 email: req.body.email,
                 password: hashedPasswords
                 

        })
        new_user.save()
        const token = signToken(new_user._id);
        res.status(201).json({
            
            message: "succefully registered",
            token: token,
            new_user: new_user
        });
    }

    }
    catch(err){
        res.status(400).json({
            status: "failed",
            error: err.message,
        })
    }
   


   
};







export const login =async (req, res) => {
    try{
        const user = await user_model.findOne({email : req.body.email}) ;
        const check_pass= await bcrypt.compare(req.body.password, user.password);
        if(!check_pass || !user){
            return res.status(403).json({
                message: "invalid email or password"
            })}
         else {
            const token = signToken(user._id);
        res.status(201).json({
            message: "LOGIN succefully ",
            token: token,
            
        });
         }   

        
        
    }catch(err){
        res.status(400).json({
            status: "failed",
            error: err.message,
        })

    }

     
  }

  export const getall_user = async (req,res) =>{
    const user = await user_model.find();
    return res.status(200).json({
        users: user
    })
}
