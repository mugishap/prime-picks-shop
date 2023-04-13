import Joi from 'joi'


// User Validations
const CreateUserSchema = Joi.object({
    fullname: Joi.string().required().min(4).max(50),
    email: Joi.string().email().required().max(40).min(4),
    mobile: Joi.string().max(15).min(10),
    location: Joi.string().required(),
    password: Joi.string().required().max(16).min(4),
})

const UpdateUserSchema = Joi.object({
    fullname: Joi.string().required().min(4).max(50),
    email: Joi.string().email().required().max(40).min(4),
    avatar: Joi.string(),
    coverImage: Joi.string(),
})

const LoginUserSchema = Joi.object({
    email: Joi.string().email().required().max(40).min(4),
    password: Joi.string().required().max(16).min(4),
})

const UpdatePasswordSchema = Joi.object({
    oldPassword: Joi.string().required().max(16).min(4),
    newPassword: Joi.string().required().max(16).min(4),
})

const DeleteUserSchema = Joi.object({
    password: Joi.string().required().max(16).min(4),
})

//Product validation

const CreateProductSchema = Joi.object({
    name: Joi.string().required().max(20).min(2),
    price: Joi.number().required(),
    currency: Joi.string().optional().valid("USD","RWF"),
    quantity: Joi.number().optional(),
    description: Joi.string().required().max(400).min(4),
    imageString: Joi.string().required(),
})

const UpdateProductSchema = Joi.object({
    name: Joi.string().required().max(20).min(2),
    price: Joi.number().required(),
    currency: Joi.string().optional().valid("RWF","USD"),
    quantity: Joi.number().optional(),
    description: Joi.string().required().max(400).min(4),
    imageString: Joi.string(),

})

export { CreateUserSchema, UpdateUserSchema, LoginUserSchema, UpdatePasswordSchema, DeleteUserSchema, CreateProductSchema,UpdateProductSchema }