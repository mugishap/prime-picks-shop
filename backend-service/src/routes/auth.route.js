import express from 'express'
import { isLoggedIn } from '../middlewares/auth.middleware.js'
import authController from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post('/login', authController.login)

export default authRouter