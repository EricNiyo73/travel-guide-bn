import mongoose from "mongoose"
const cardSchema = new mongoose.Schema( 
    { 
        image: { 
            type: String, 
            required: true, 
            
        }, 
        title: { 
            type: String, 
            required: true, 
             
        }, 
        description: { 
            type: String, 
            required: true, 
            
        }, 
        location: { 
            type: String, 
            required: true, 
             
        }, 

             },
             );
             
     export default mongoose.model("card", cardSchema);