import { Router } from 'express';
import { registerDefinition } from 'swaggiffy';
import contactController from '../controllers/contact.controller.js';

const contactRouter = Router()

contactRouter.post('/contact-us', contactController.createContact)

registerDefinition(contactRouter, { tags: 'Contact', mappedSchema: 'Contact', basePath: '/api/v1/contact' });

export default contactRouter
