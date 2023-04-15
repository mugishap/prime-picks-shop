import Order from "./../models/order.js"
import Product from './../models/product.js'
import { ApiResponse } from './../responses/api.response.js'
import { uploadFile } from './../utils/files.util.js'
import { CreateProductSchema, UpdateProductSchema } from './../validations/app.validation.js'

const createProduct = async (req, res) => {
    try {
        const { error } = CreateProductSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { name, price, currency, quantity, description, imageString } = req.body
        const image = await uploadFile(imageString)
        const product = await new Product({
            name, price, currency, quantity, description, image
        })
        await product.save()
        return res.status(201).json(new ApiResponse(true, "Product created successfully", { product }))
    } catch (error) {
        const regex = /index:\s+(\w+)_\d+\s+/;
        if (error.message.includes(" duplicate key error collection")) return res.status(500).json(new ApiResponse(false, `${(error.message.match(regex)[1])} already exists`, error))
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", error))
    }
}

const updateProduct = async (req, res) => {
    try {
        const { error } = UpdateProductSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { name, price, currency, quantity, description, imageString } = req.body
        const { id } = req.params
        const product = await Product.findById(id)
        if (imageString) {
            const image = await uploadFile(imageString)
            product.image = image
        }
        product.name = name
        product.price = price
        product.currency = currency
        product.quantity = quantity
        product.description = description
        await product.save()
        return res.status(200).json(new ApiResponse(true, "Product updated successfully", { product }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (!product) return res.status(404).json(new ApiResponse(false, "Product not found", null))
        return res.status(200).josn(new ApiResponse(true, "Product fetched successfully"))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json(new ApiResponse(true, "Products fetched successfully", { products }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const searchProducts = async (req, res) => {
    try {
        const { query } = req.params
        const products = await Product.find({ $or: [{ name: { $regex: query, $options: "i" } }, { description: { $regex: query, $options: "i" } }] })
        if(!products.length)return res.status(200).json(new ApiResponse(true, "No products with the search query", { products }))
        return res.status(200).json(new ApiResponse(true, "Products fetched successfully", { products }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (!product) return res.status(404).json(new ApiResponse(false, "Product not found", null))
        const orders = await Order.find({ product: id })
        for (let order of orders) {
            await order.remove()
        }
        await product.remove()
        return res.status(200).json(new ApiResponse(true, "Product deleted successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const productController = {
    createProduct,
    updateProduct,
    getProductById,
    getProducts,
    deleteProduct,
    searchProducts
}

export default productController