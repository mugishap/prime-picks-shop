import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    product: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    status: {
        type: String,
        enum: ["GRANTED", "DENIED", "PENDING"],
        default: "PENDING"
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