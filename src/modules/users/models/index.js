import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    role: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },

}, {
    timestamps: true
})

export const UserModel = mongoose.model("users", UserSchema);