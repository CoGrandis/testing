import express from "express";
import { ProductRouter } from "./productos/productRouter";
import { InMemoryProductRepository } from "./productos/repository/InMemoryProductRepository";
import { ProductService } from "./productos/services/productServices";
const app = express();
const productRepository= new InMemoryProductRepository();
const productService = new ProductService(productRepository);
const productRouter = new ProductRouter(productService);
app.use(express.json());
app.use("/api/products", productRouter.init())

export {app}