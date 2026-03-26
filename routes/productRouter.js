import express from"express";
import {getProducts,createProduct, deleteProduct, updateProduct, getProductId, getProductsBySearch, } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.get("/",getProducts)
productRouter.post("/",createProduct)
productRouter.delete("/:productId",deleteProduct);
productRouter.put("/:productId",updateProduct)
productRouter.get("/search/:query", getProductsBySearch)
productRouter.get("/:productId",getProductId)



export default productRouter;
