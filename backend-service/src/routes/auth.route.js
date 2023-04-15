import { Router } from 'express';
import { registerDefinition } from 'swaggiffy';
import authController from '../controllers/auth.controller.js';

const authRouter = Router()

authRouter.post('/login', authController.login)

registerDefinition(authRouter, { tags: 'Auth', mappedSchema: 'Auth', basePath: '/api/v1/auth' });

export default authRouter
