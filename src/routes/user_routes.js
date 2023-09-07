import { getall_user,signup, login } from "../controllers/user_contoller";

import express  from "express";
const router = express.Router();
router.post("/signup",signup);
router.post("/login",login);
router.get("/getall_user",getall_user);

export default router; 