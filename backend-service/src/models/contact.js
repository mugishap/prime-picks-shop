import mongoose, { Schema } from 'mongoose'
import { registerSchema } from 'swaggiffy';

const ContactSchema = new Schema({
    fullname: {
        type: String,
        minlength: 3
    },
    mobile: {
        type: String,
        required: false,
        minlength: 10,
        maxlength: 15,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 40
    },
    message: {
        type: String,
        required: true,
        minlength: 40,
        maxlength: 600
    },
})

const Contact = mongoose.model('contact', ContactSchema)
export default Contact

registerSchema('Contact', ContactSchema, { orm: 'mongoose' }); 