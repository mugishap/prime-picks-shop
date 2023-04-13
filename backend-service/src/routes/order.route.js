import { Router } from 'express'
import orderController from './../controllers/order.controller.js'
import { isLoggedIn, isAdmin } from './../middlewares/auth.middleware.js'
import { registerDefinition } from 'swaggiffy'

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