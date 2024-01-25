import mongoose from 'mongoose';


const Message_Shema = new mongoose.Schema({
    message: {
        text: {
            type: String,
            required: true
        }
    },
    users: Array,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "auth"
    }
}, {
    timestamps: true
})

mongoose.models = {};

export default mongoose.model("message", Message_Shema)