import { Product } from "../model/productModel";
import {prisma} from "../../database/prisma"
import { IProductRepository } from "./productRepository";

export class PrismaProductRepository implements IProductRepository{
    async getAll(): Promise<Product[]> {
        const result = await prisma.producto.findMany();
        return result
    }
    async getProductById(id: number): Promise<Product | null> {
        const result = await prisma.producto.findFirst({where:{id}});
        return result
    }
    async createProduct(product: Product): Promise<Product | null> {
        const result = await prisma.producto.create({data:{
            code:product.code,
            name:product.name,
            price:product.price,
        }})
        return result
    }
    async updateProduct(product: Product, id:number): Promise<Product | null> {
        const result = await prisma.producto.update({where:{id},data:{
            code:product.code,
            name:product.name,
            price:product.price,
        }})
        return result
    }
}