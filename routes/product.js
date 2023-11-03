import express from "express";
const route=express.Router();
import {creteProduct,getProduct, updateProduct,deleteProduct } from "../controllers/product.js";


//create product
route.post("/product/new", creteProduct)


//Read product
route.get("/products", getProduct)

// update product
route.put("/product/:id", updateProduct )


// Delete product
route.delete("/product/:id", deleteProduct)

export default route;