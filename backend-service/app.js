import bodyParser from 'body-parser'
import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import http from "http"
import { Swaggiffy } from 'swaggiffy'
import { ApiResponse } from './src/responses/api.response.js'
import authRouter from './src/routes/auth.route.js'
import orderRouter from './src/routes/order.route.js'
import productRouter from './src/routes/product.route.js'
import userRouter from './src/routes/user.route.js'
import options from './src/utils/cors.util.js'
import { connectDB } from './src/utils/db.util.js'
import contactRouter from './src/routes/contact.route.js'

config()
connectDB()

const app = express()
const server = http.createServer(app)
const { PORT } = process.env

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "3mb" }));
app.use(cors());
app.use(bodyParser.json({ limit: "3mb" }))
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/order", orderRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/contact", contactRouter)
app.use("*", (req, res, next) => {
    if (req.baseUrl.includes("/api/v1/docs")) return next()
    res.status(404).json(new ApiResponse(false, "Route not found", null));
});

new Swaggiffy().setupExpress(app).swaggiffy();

server.listen(PORT, (err) => {
    if (err) throw new Error("[LOG]: Server failed to start")
    console.log(`[LOG]:Server started successfully ${PORT}`)
})


