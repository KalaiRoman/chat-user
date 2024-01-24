import expres from 'express';
import { chatCreatemessage, chatCreatemessageDelete } from './Chatcontrolls.js';
import { verifyToken } from './../../middleware/Tokenverification.js';
const chatrouter = expres.Router();
chatrouter.put("/create/:id", verifyToken, chatCreatemessage)
chatrouter.post("/delete/:id", verifyToken, chatCreatemessageDelete)
export default chatrouter;