import express from 'express'
import http from "http"
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import { connectDB } from './src/utils/db.util.js'
import cors from 'cors'
import options from './src/utils/cors.util.js'
import authRouter from './src/routes/auth.route.js'
import userRouter from './src/routes/user.route.js'
import { ApiResponse } from './src/responses/api.response.js'

config()
connectDB()

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(options));
app.use(bodyParser.json())
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("*", (req, res) => {
    res.status(404).json(new ApiResponse(false, "Route not found", null));
});

server.listen(PORT, (err) => {
    if (err) throw new Error("[LOG]: Server failed to start")
    console.log(`[LOG]:Server started successfully ${PORT}`)
})
