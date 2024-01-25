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
    avatar: {
        type: String,
    },
    avatarstatus: {
        type: Boolean
    }
}, {
    timestamps: true
});

mongoose.models = {};

export default mongoose.model("auth", Auth_Shema);