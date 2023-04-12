import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        enum:["RWF","USD"]
    },
    quantity: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 400,
        minlength: 3
    },
    image: {
        type: String,
        required: true,
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


const Product = mongoose.model('product', ProductSchema)
export default Product