import express from "express";
import { ProductRouter } from "./productos/productRouter";
import { InMemoryProductRepository } from "./productos/repository/InMemoryProductRepository";
import { ProductService } from "./productos/services/productServices";
import { PrismaProductRepository } from "./productos/repository/prismaProductRepository";
const app = express();
const productRepository= new PrismaProductRepository();
const productService = new ProductService(productRepository);
const productRouter = new ProductRouter(productService);
app.use(express.json());
app.use("/api/products", productRouter.init())

export {app}