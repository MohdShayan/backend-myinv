import express from "express";
import {getProducts , createNewProduct , deleteProduct , updateProduct} from '../controllers/productController.js'
const router = express.Router();

router.get("/", getProducts);

router.post("/", createNewProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router;
