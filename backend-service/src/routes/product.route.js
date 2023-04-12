import { Router } from "express";
import { registerDefinition } from "swaggiffy";
import { isLoggedIn, isAdmin } from "./../middlewares/auth.middleware"
import productController from "./../controllers/product.controller"

const productRouter = Router();

productRouter.post("/create", { isLoggedIn, isAdmin }, productController.createProduct)
productRouter.put("/update/:id", { isLoggedIn, isAdmin }, productController.updateProduct)
productRouter.post("", productController.getProducts)
productRouter.post("/:id", productController.getProductById)

registerDefinition(productRouter, { tags: 'Product', mappedSchema: 'Product', basePath: '/api/v1/products' });

export default productRouter
