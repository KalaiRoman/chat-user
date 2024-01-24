import Auth_Shema from "../../modules/Auth_Shema.js";

export const chatCreatemessage = async (req, res, next) => {
    const { userid, desc, commanduserdid } = req.body;
    try {

        // if (req.userid == userid) {
        const responsePost = await Auth_Shema.findById(req.params.id);
        if (responsePost) {
            await responsePost.updateOne({
                $push: {
                    userChatmessages: {
                        desc: desc,
                        commanuserId: commanduserdid,
                        user: userid,
                    }
                }
            })
            res.status(201).json({ message: "Post Command user" })
            // }
            // else {
            //     res.status(200).json({ message: "Un authorized user" })
            // }
        }
        else {
            res.status(404).json({ message: "Your Not Allowed Post Delete" })
        }

    } catch (error) {
        res.status(404).json({ message: "something error" })

    }
}


export const chatCreatemessageDelete = async (req, res, next) => {
    const { userid, commandid } = req.body;
    try {

        if (req.userid === userid) {

            const post = await Auth_Shema.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $pull: { userChatmessages: { _id: commandid } },
                },
                { new: true }
            );

        }
        else {
            res.status(404).json({ message: "Your Not Allowed Post Delete" })
        }

    } catch (error) {
        res.status(404).json({ message: error })

    }
}