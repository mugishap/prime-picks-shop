import { ApiResponse } from "../responses/api.response.js"
import { CreateUserSchema, UpdateUserSchema } from "../validations/app.validation.js"
import bcrypt from "bcryptjs"
import { config } from "dotenv"
import User from "../models/user.js"
import jwt from "jsonwebtoken"
import { uploadFile } from "../utils/files.util.js"
import { UpdatePasswordSchema } from "../validations/app.validation.js"

config()
const { JWT_SECRET_KEY } = process.env

const registerUser = async (req, res) => {
    try {
        const { error } = CreateUserSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { fullname,location, email, mobile, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8)
        const user = new User({
            fullname,
            email,
            mobile,
            location,
            password: hashedPassword
        })
        await user.save()
        const token = await jwt.sign({ id: user._id, role: user.role }, JWT_SECRET_KEY, { expiresIn: "31d" })
        return res.status(201).json(new ApiResponse(true, "User created successfully", { user, token }))
    } catch (error) {
        console.log(error.code)
        console.log(error.message)
        const regex = /index:\s+(\w+)_\d+\s+/;
        if (error.code === 11000) return res.status(400).json(new ApiResponse(false, `${(error.message.match(regex)[1])} already exists`, error))
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", error))
    }
}

const registerAdmin = async (req, res) => {
    try {
        const { error } = CreateUserSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { fullname,location, email, mobile, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 8)
        const user = new User({
            fullname,
            email,
            mobile,
            role,
            location,
            password: hashedPassword
        })
        await user.save()
        return res.status(201).json(new ApiResponse(true, "Admin created successfully", { user }))
    } catch (error) {
        console.log(error.code)
        console.log(error.message)
        const regex = /index:\s+(\w+)_\d+\s+/;
        if (error.code === 11000) return res.status(400).json(new ApiResponse(false, `${(error.message.match(regex)[1])} already exists`, error))
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", error))
    }
}


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(new ApiResponse(true, "All users fetched successfully", { count: users.length, users }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json(new ApiResponse(false, "User not found", null))
        return res.status(200).json(new ApiResponse(true, "User found", user))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const updateUser = async (req, res) => {
    try {
        const { error } = UpdateUserSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const user = await User.findById(req.user.id)
        if (!user) return res.status(404).json(new ApiResponse(false, "User not found", null))
        const { fullname, email, avatarString, coverImage } = req.body
        if (avatarString) {
            const avatar = await uploadFile(avatarString)
            user.avatar = avatar
        }
        user.fullname = fullname
        user.email = email
        user.mobile = mobile
        user.location = location
        user.updatedAt = Date.now()
        await user.save()
        return res.status(200).json(new ApiResponse(true, "User updated successfully", { user }))
    } catch (error) {
        console.log(error.message)
        const regex = /index:\s+(\w+)_\d+\s+/;
        if (error.message.includes(" duplicate key error collection")) return res.status(500).json(new ApiResponse(false, ` ${(error.message.match(regex)[1])} already exists`, error))
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", error))
    }
}

const updateProfileStatus = async (req, res) => {
    try {
        const { profileStatus } = req.body
        const user = await User.findById(req.user.id)
        if (!user) return res.status(404).json(new ApiResponse(false, "User not found", null))
        user.profileStatus = profileStatus
        await user.save()
        return res.status(200).json(new ApiResponse(true, "Profile status updated successfully", { user }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const deleteUserByAdmin = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json(new ApiResponse(false, "User not found", null))
        await user.delete()
        return res.status(200).json(new ApiResponse(true, "User deleted successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        const { password } = req.body
        if (!user) return res.status(404).json(new ApiResponse(false, "User not found", null))
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json(new ApiResponse(false, "Incorrect password", null))
        await User.findByIdAndDelete(user._id)
        return res.status(200).json(new ApiResponse(true, "User deleted successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const searchUser = async (req, res) => {
    try {
        const { query } = req.params
        const users = await User.find({ $or: [{ email: (new RegExp(`${query}`)) }, { fullname: (new RegExp(`${query}`)) }] })
        return res.status(200).json(new ApiResponse(true, "Users searched successfully", { users }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const updateAvatar = async (req, res) => {
    try {
        const { avatarString } = req.body
        if (!avatarString) return res.status(400).json(new ApiResponse(false, "No image string provided", null))
        const avatar = await uploadFile(avatarString)
        const user = await User.findById(req.user.id)
        user.avatar = avatar;
        user.save()
        return res.status(200).json(new ApiResponse(true, "Avatar updated successfully", { user }))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const updatePassword = async (req, res) => {
    try {
        const { error } = UpdatePasswordSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { oldPassword, newPassword } = req.body
        const { id } = req.user
        const user = await User.findById(id)
        const match = await bcrypt.compare(oldPassword, user.password)
        if (!match) return res.status(400).json(new ApiResponse(false, "Incorrect password", null))
        const hash = await bcrypt.hashSync(newPassword, 8)
        user.password = hash
        await user.save()
        return res.status(200).json(new ApiResponse(true, "Password updated successfully", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const userController = {
    registerUser,
    getAllUsers,
    getUserById,
    updateUser,
    updateProfileStatus,
    deleteUserByAdmin,
    deleteUser,
    searchUser,
    updateAvatar,
    updatePassword,
    registerAdmin
}

export default userController