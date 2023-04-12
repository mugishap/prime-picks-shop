import { config } from "dotenv"
import mongoose from "mongoose"

config()

const {DATABASE_URL,DATABASE_NAME} = process.env
export const connectDB = async () => {

    mongoose.set('strictQuery', true)
    await mongoose.connect(DATABASE_URL, {
        dbName: DATABASE_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err) throw new Error("Failed to connect to database")
        console.log("[LOG]:Database connection successful");
    })
}