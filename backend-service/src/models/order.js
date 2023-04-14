import mongoose, { Schema } from "mongoose";
import { registerSchema } from "swaggiffy";

const OrderSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },
    product: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "product"
    },
    status: {
        type: String,
        enum: ["GRANTED", "DENIED", "PENDING"],
        default: "PENDING"
    },
    quantity: {
        type: Number,
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


const Order = mongoose.model('order', OrderSchema)
export default Order

registerSchema('Order', OrderSchema, { orm: 'mongoose' }); 