import mongoose from "mongoose"
const commentSchema = new mongoose.Schema( 
    { 
        firstName: { 
            type: String, 
            required: true, 
            
        }, 
        comment: { 
            type: String, 
            required: true, 
             
        }, 
             },
             );
             
     export default mongoose.model("comment", commentSchema);