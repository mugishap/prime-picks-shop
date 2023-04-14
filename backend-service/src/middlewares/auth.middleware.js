
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { ApiResponse } from '../responses/api.response.js'

config()
const { JWT_SECRET_KEY } = process.env

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) return res.status(401).json(new ApiResponse(false, "No token sent in headers!!!", null))
        const response = jwt.verify(token, JWT_SECRET_KEY, {})
        if (!response) return res.status(401).json(new ApiResponse(false, "You are not logged in", null))
        req.user = response
        next()
    }
    catch (error) {
        console.log(error)
        if (error.message === "jwt malformed") return res.status(401).json(new ApiResponse(false, "Invalid token", null))
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) return res.status(401).json(new ApiResponse(false, "You are not an admin", null))
        const response = await jwt.verify(token, JWT_SECRET_KEY, {})
        if (response.role !== "ADMIN") return res.status(401).json(new ApiResponse(false, "You are not an admin", null))
        req.user = response
        next()
    }
    catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

export {
    isAdmin,
    isLoggedIn
}