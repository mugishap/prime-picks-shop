import mongoose, { Schema } from "mongoose";
import { registerSchema } from "swaggiffy";

const AuthSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

registerSchema('Auth', AuthSchema, { orm: 'mongoose' }); 