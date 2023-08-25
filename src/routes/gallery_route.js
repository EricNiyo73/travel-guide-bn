import express  from "express";
import { postgallery } from "../controllers/gallery_controller";
import  { upload } from "../helper/multer";
const router = express.Router();
router.post('/creategallery',upload.single('photo'), postgallery)
export default router;