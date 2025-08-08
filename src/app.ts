import express from "express";
import { AuthRouter } from "./auth/authRouter";
import { PrismaAuthRepository } from "./auth/repository/prismaAuthRepository";
import { AuthController } from "./auth/authController";
import { ProductRouter } from "./productos/productRouter";
import { ProductService } from "./productos/services/productServices";
import { PrismaProductRepository } from "./productos/repository/prismaProductRepository";
import { AuthServices } from "./auth/services/authService";

const app = express();
const authRepository= new PrismaAuthRepository()
const authServices= new AuthServices(authRepository)
const authController = new AuthController(authServices)
const authRouter = new AuthRouter(authController)

const productRepository= new PrismaProductRepository();
const productService = new ProductService(productRepository);
const productRouter = new ProductRouter(productService);

app.use(express.json());
app.use("/api/products", productRouter.init())
app.use("/api/auth", authRouter.init())

export {app}