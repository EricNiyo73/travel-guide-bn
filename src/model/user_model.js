import mongoose from "mongoose"
const UserSchema = new mongoose.Schema( 
    { 
        firstName: { 
            type: String, 
            required: true, 
            
        }, 
        lastName: { 
            type: String, 
            required: true, 
             
        }, 
        gender: { 
            type: String, 
            required: true, 
            
        }, 
        nationality: { 
            type: String, 
            required: true, 
             
        }, 
        phone: { 
            type: String, 
            required: true, 
            unique: true, 
        }, 
        role: { 
            type: String, 
            required: true, 
             
        }, 
        email: {
             type: String, 
             required: true, 
             unique: true, 
            }, 
            password: {
                 type: String, 
                 required: true, 
                },
             },
             );
             
     export default mongoose.model("User", UserSchema);