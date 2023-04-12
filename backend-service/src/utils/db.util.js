import bcrypt from "bcryptjs"
import { config } from "dotenv"
import mongoose from "mongoose"
import User from "../models/user.js"

config()

const DATABASE_URL = process.env.DATABASE_URL
export const connectDB = async () => {

    mongoose.set('strictQuery', true)
    await mongoose.connect(DATABASE_URL, {
        dbName: "prime_picks",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err) throw new Error("Failed to connect to database")
        console.log("[LOG]:Database connection successful");
    })
}