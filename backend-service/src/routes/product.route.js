import { Router } from "express";
import { registerDefinition } from "swaggiffy";
import { isLoggedIn, isAdmin } from "./../middlewares/auth.middleware.js"
import productController from "./../controllers/product.controller.js"

const productRouter = Router();

productRouter.post("/create", [isLoggedIn, isAdmin], productController.createProduct)
productRouter.put("/update/:id", [isLoggedIn, isAdmin], productController.updateProduct)
productRouter.get("/all", productController.getProducts)
productRouter.get("/search/:query", productController.searchProducts)
productRouter.delete("/delete/:id",[isLoggedIn,isAdmin], productController.deleteProduct)
productRouter.get("/:id", productController.getProductById)

registerDefinition(productRouter, { tags: 'Product', mappedSchema: 'Product', basePath: '/api/v1/products' });

export default productRouter
