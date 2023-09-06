import mongoose from "mongoose";
const gallerySchema = new mongoose.Schema(
    {
        photo: {
            type: Array,
            require: true
        }
        // video: {
        //     type: String,
        //     require: true
        // }
    }
)
export default mongoose.model("gallery", gallerySchema);
