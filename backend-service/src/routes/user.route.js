import { Router } from 'express'
import { registerDefinition } from 'swaggiffy'
import userController from '../controllers/user.controller.js'
import { isAdmin, isLoggedIn } from '../middlewares/auth.middleware.js'

const userRouter = Router()

userRouter.post('/register', userController.registerUser)
userRouter.post('/register-admin', [isLoggedIn, isAdmin], userController.registerAdmin)
userRouter.put('/update', isLoggedIn, userController.updateUser)
userRouter.put('/update-password', isLoggedIn, userController.updatePassword)
userRouter.put('/update-status', isLoggedIn, userController.updateProfileStatus)
userRouter.get('/all', [isLoggedIn, isAdmin], userController.getAllUsers)
userRouter.get('/:id', isLoggedIn, userController.getUserById)
userRouter.delete('/delete/:id', [isLoggedIn, isAdmin], userController.deleteUserByAdmin)
userRouter.post('/delete', isLoggedIn, userController.deleteUser)
userRouter.get("/search/:query", isLoggedIn, userController.searchUser)
userRouter.patch("/update-avatar", isLoggedIn, userController.updateAvatar)

registerDefinition(userRouter, { tags: 'User', mappedSchema: 'User', basePath: '/api/v1/user' });

export default userRouter