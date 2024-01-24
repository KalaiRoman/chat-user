import mongoose from 'mongoose';
const Auth_Shema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username is Required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is Required"],
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    userChatmessages: {
        type: [
            {
                message: {
                    type: String,
                },
                commanduserId: {
                    type: String,
                    required: true
                },
                createdAt: {
                    type: String,
                    default: () => new Date().toISOString(),
                },
                updatedAt: {
                    type: String,
                    default: () => new Date().toISOString(),
                },
            },
        ],
        default: []
    },
}, {
    timestamps: true
});

export default mongoose.model("auth", Auth_Shema);