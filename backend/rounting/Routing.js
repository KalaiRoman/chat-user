import express from 'express';
import authrouter from '../controlls/authcontrolls/index.js';
import chatrouter from '../controlls/chatcontrolls/index.js';

const router = express.Router();
//auth router
router.use("/auth", authrouter);
router.use("/chat", chatrouter);


export default router;


