import express from "express";
import { func, login, register } from '../controllers/auth.js';

const router = express.Router();

router.post("/login", login);
router.get("/func", func);
router.post("/register", register);

export default router;