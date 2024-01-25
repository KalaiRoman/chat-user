import expres from 'express';
import { chatCreatemessage, chatCreatemessageDelete, getMessages } from './Chatcontrolls.js';
import { verifyToken } from './../../middleware/Tokenverification.js';
const chatrouter = expres.Router();
chatrouter.post("/create", verifyToken, chatCreatemessage);
chatrouter.post("/getmessages/", verifyToken, getMessages);
chatrouter.delete("/delete/:id", verifyToken, chatCreatemessageDelete)
export default chatrouter;