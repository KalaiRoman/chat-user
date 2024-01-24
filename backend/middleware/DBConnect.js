
import mongoose from "mongoose";
const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Error")

    }
}

export default ConnectDb;