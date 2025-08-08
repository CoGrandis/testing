import { PrismaProductRepository } from "src/productos/repository/prismaProductRepository";
import { DiContainer } from "./DiContainer";
import { ProductService } from "src/productos/services/productServices";
import { InMemoryProductRepository } from "src/productos/repository/InMemoryProductRepository";

const container = new DiContainer()

container.register("product-repository", InMemoryProductRepository)
// container.register("product-repository", PrismaProductRepository)
container.register("product-service", ProductService,["product-repository"])

export {container}