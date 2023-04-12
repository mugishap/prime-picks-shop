import { config } from "dotenv"
import User from "../models/user.js"
import bcrypt from 'bcryptjs'
import { LoginUserSchema } from "../validations/app.validation.js"
import jwt from 'jsonwebtoken'
import { ApiResponse } from "../responses/api.response.js"

config()
const { JWT_SECRET_KEY, JWT_EXPIRES_IN } = process.env

const login = async (req, res) => {
    try {
        const { error } = LoginUserSchema.validate(req.body)
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json(new ApiResponse(false, "Incorrect credentials", null))
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) return res.status(404).json(new ApiResponse(false, "Incorrect credentials", null))
        const token = await jwt.sign({ id: user._id, role: user.role }, JWT_SECRET_KEY, { expiresIn: JWT_EXPIRES_IN })
        return res.status(200).json(new ApiResponse(true, "Login successful", { user, token }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const authController = {
    login
}
export default authController