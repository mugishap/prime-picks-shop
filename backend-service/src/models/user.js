import mongoose, { Schema } from "mongoose";
import { registerSchema } from "swaggiffy";

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 40
    },
    mobile: {
        type: String,
        required: false,
        minlength: 10,
        maxlength: 15
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE"],
        required: false
    },
    avatar: {
        type: String,
        required: false,
        default: "https://res.cloudinary.com/precieux/image/upload/v1677675293/Utilities/cjrana8po0nonquxailm.jpg"
    },
    role: {
        type: String,
        enum: ["ADMIN", "NORMAL"],
        default: "NORMAL"
    },
    location: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    updatedAt: {
        type: String,
        default: Date.now()
    }
})


const User = mongoose.model('user', UserSchema)
export default User

registerSchema('User', UserSchema, { orm: 'mongoose' }); 