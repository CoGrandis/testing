import { PrismaProductRepository } from "src/productos/repository/prismaProductRepository";
import { DiContainer } from "./DiContainer";
import { ProductService } from "src/productos/services/productServices";
import { InMemoryProductRepository } from "src/productos/repository/InMemoryProductRepository";
import { Product } from "src/productos/model/productModel";

const container = new DiContainer()
            const newProduct:Product={
                id:1,
                name: "producto",
                code: "ES43SS",
                price: 1000
            }
            const productRepository = new InMemoryProductRepository([newProduct]);
            container.registerInstance("product-repository", productRepository);
container.register("product-repository", InMemoryProductRepository)
container.register("product-service", ProductService,["product-repository"])

export {container}