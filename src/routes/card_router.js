import express  from "express";
import { createcard } from "../controllers/card_controller";
const router = express.Router();

router.post('/createcard',createcard)

export default router;