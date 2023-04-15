import { Router } from 'express'
import { registerDefinition } from 'swaggiffy'
import orderController from './../controllers/order.controller.js'
import { isAdmin, isLoggedIn } from './../middlewares/auth.middleware.js'

const orderRouter = Router()

orderRouter.post("/create", [isLoggedIn], orderController.createOrder)
orderRouter.put("/update/:id", [isLoggedIn], orderController.updateOrder)
orderRouter.get("/all", [isLoggedIn, isAdmin], orderController.getOrders)
orderRouter.patch("/grant/:orderId", [isLoggedIn, isAdmin], orderController.grantOrder)
orderRouter.patch("/deny/:orderId", [isLoggedIn, isAdmin], orderController.denyOrder)
orderRouter.get("/product/:productId", [isLoggedIn, isAdmin], orderController.getOrdersByProduct)
orderRouter.get("/mine", [isLoggedIn], orderController.getOrdersByUser)

registerDefinition(orderRouter, { tags: 'Order', mappedSchema: 'Order', basePath: '/api/v1/order' })

export default orderRouter