import express  from "express";
import   upload  from "../helper/multer";
import {Authorization} from "../middleWare/auth"
import {Authorization_admin} from "../middleWare/check_Admin"
import { createComment,getall_cards,createcard } from "../controllers/card_controller";
const router = express.Router();

router.post('/createcard',Authorization_admin,upload.array('photo'),createcard);
router.get('/getall_cards',getall_cards)
router.post('/comment/:id',Authorization,createComment)

export default router;