import mongoose from "mongoose"
import 'dotenv/config'
import { ENV } from "../constants.js"

const ConnectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGODB_URI);
        console.log("MongoDB Connected");

    } catch (error) {
        console.log("MongoDB Connection Failed", error);
    }
}

export default ConnectDB;