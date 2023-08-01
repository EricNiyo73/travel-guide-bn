import mongoose from "mongoose";
import validator from "validator";

const restourantSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Image  is required"],
  },
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
  location: {
    type: String,
  },
  postedOn: { type: Date, default: Date.now },
});
const restourantModel = mongoose.model("Blog", restourantSchema);

export default restourantModel;
