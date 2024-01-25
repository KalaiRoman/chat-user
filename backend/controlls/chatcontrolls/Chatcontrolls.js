import Auth_Shema from "../../modules/Auth_Shema.js";
import Message_shema from "../../modules/Message_shema.js";

export const chatCreatemessage = async (req, res, next) => {
    const { message, to } = req.body;
    try {
        const responsePost = await new Message_shema({
            message: { text: message },
            users: [req.userid, to],
            user: req.userid
        });
        responsePost.save();
        res.status(201).json({ message: "Created Message", data: responsePost });
    } catch (error) {
        res.status(404).json({ message: "something error" })
    }
}

export const getMessages = async (req, res, next) => {
    const { to } = req.body;
    try {
        const responsePost = await Message_shema.find({ users: { $all: [req.userid, to] } }).sort({ updatedAt: 1 });
        const postMessages = responsePost?.map((item) => {
            return {
                fromself: item?.user?.toString() == req.userid,
                message: item?.message?.text,
                id:item?._id
            }
        })
        res.status(200).json({ message: "success", data: postMessages });
    } catch (error) {
        res.status(404).json({ message: "something error" })
    }
}

export const chatCreatemessageDelete = async (req, res, next) => {
    try {
        const post = await Message_shema.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Message Deleted" })
    } catch (error) {
        res.status(404).json({ message: error })

    }
}