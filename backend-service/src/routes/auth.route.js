import { Router } from 'express'
import authController from '../controllers/auth.controller.js'
import { registerDefinition } from 'swaggiffy';

const authRouter = Router()

authRouter.post('/login', authController.login)

registerDefinition(authRouter, { tags: 'Auth', mappedSchema: 'Auth', basePath: '/api/v1/auth' });

export default authRouter
