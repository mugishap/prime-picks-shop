import Product from '../models/product.js'
import User from '../models/user.js'
import { ApiResponse } from '../responses/api.response.js'
import Order from './../models/order.js'
import { sendOrderDeclinedEmail, sendOrderGrantedEmail, sendOrderReceivedEmail } from './../utils/mail.util.js'

const createOrder = async (req, res) => {
    try {
        const { productId, quantity } = req.body
        const { id } = req.user
        const user = await User.findById(id)
        const product = await Product.findById(productId)
        if (!product) return res.status(404).json(new ApiResponse(false, "Product not found", null))
        if (product.quantity < quantity) return res.status(400).json(new ApiResponse(false, "Insufficient quantity", null))
        product.quantity - quantity
        await product.save()

        const entity = new Order({
            product: productId,
            user: id,
            quantity
        })
        await entity.save()

        const order = await Order.findById(entity._id).populate(["product", "user"])
        await sendOrderReceivedEmail(user.email, user.fullname, product)
        return res.status(200).json(new ApiResponse(true, "Product requested successfully", { order, product }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const getOrdersByProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const orders = await Order.find({ product: productId })
        return res.status(200).json(new ApiResponse(true, "Orders fetched successfuly", { orders }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate(["product", "user"])
        return res.status(200).json(new ApiResponse(true, "Orders fetched successfuly", { orders }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params
        const { quantity } = req.body
        const order = await Order.findById(orderId).populate(["product", "user"])
        const product = await Product.findById(order.product)
        if (product.quantity < quantity) return res.status(400).json(new ApiResponse(false, "Insuffienced quantity", null))
        const availableQuantity = product.quantity + order.quantity
        product.quantity = availableQuantity - quantity
        order.quantity = quantity
        product.save()
        quantity.save()
        return res.status(200).json(new ApiResponse(true, "Order updated successfully", { order }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.findById(id)
        if (!order) return res.status(404).json(new ApiResponse(false, "Order not found", null))
        if (order.status === "GRANTED" || order.status === "DENIED") return res.status(400).json(new ApiResponse(false, "Only denied requests can be deleted!!!"))
        order.remove()
        return res.status(200).json(new ApiResponse(true, "Order deleted successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const grantOrder = async (req, res) => {
    try {
        const { orderId } = req.params
        const order = await Order.findById(orderId).populate(["product", "user"])
        if (!order) return res.status(404).json(new ApiResponse(false, "Order not found", null))
        if (order.status === "GRANTED" || order.status === "DENIED") return res.status(400).json(new ApiResponse(false, "Only pending orders can be granted!!", null))
        order.status = "GRANTED"
        order.save()
        await sendOrderGrantedEmail(order)
        return res.status(200).json(new ApiResponse(true, "Order granted successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}


const denyOrder = async (req, res) => {
    try {
        const { orderId } = req.params
        const order = await Order.findById(orderId).populate(["product", "user"])
        if (!order) return res.status(404).json(new ApiResponse(false, "Order not found", null))
        if (order.status === "GRANTED" || order.status === "DENIED") return res.status(400).json(new ApiResponse(false, "Only pending orders can be denied!!", null))
        order.status = "DENIED"
        order.save()
        await sendOrderDeclinedEmail(order)
        return res.status(200).json(new ApiResponse(true, "Order granted successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const orderController = {
    createOrder,
    updateOrder,
    getOrders,
    getOrdersByProduct,
    deleteOrder,
    denyOrder,
    grantOrder
}

export default orderController