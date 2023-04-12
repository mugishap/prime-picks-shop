import express from 'express'
import { isLoggedIn, isAdmin } from '../middlewares/auth.middleware.js'
import userController from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.post('/register', userController.registerUser)
userRouter.put('/update', isLoggedIn, userController.updateUser)
userRouter.put('/update-status', isLoggedIn, userController.updateProfileStatus)
userRouter.get('/all', isLoggedIn, isAdmin, userController.getAllUsers)
userRouter.get('/:id', isLoggedIn, userController.getUserById)
userRouter.delete('/delete/:id', isLoggedIn, isAdmin, userController.deleteUserByAdmin)
userRouter.post('/delete', isLoggedIn, userController.deleteUser)
userRouter.get("/report/:id", isLoggedIn, userController.getUserReport)
userRouter.get("/search/:query", isLoggedIn, userController.searchUser)
userRouter.post("/update-avatar", isLoggedIn, userController.updateAvatar)

export default userRouter