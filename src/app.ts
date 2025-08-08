import express from "express";
import { ProductRouter } from "./productos/productRouter";
import { ProductService } from "./productos/services/productServices";
import { container } from "./dContainer/container";

const buildApp=()=>{

    const app = express();
    app.use(express.json());
    const productService = container.resolve<ProductService>("product-service")
    const productRouter = new ProductRouter(productService);
    app.use("/api/products", productRouter.init())

    return app
}

export {buildApp}