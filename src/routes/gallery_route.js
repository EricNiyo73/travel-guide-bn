import express  from "express";
import { getall, postgallery } from "../controllers/gallery_controller";
import   upload  from "../helper/multer";
const router = express.Router();
router.post('/creategallery',upload.array('photo'), postgallery)
router.get('/getall',getall)
export default router;