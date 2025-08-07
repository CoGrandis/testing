import { Product } from "../model/productModel";

export interface IProductRepository{
    getAll(): Promise<Product[]> ,
    getProductById(id:Number): Promise<Product|null>
    createProduct(product:Product): Promise<Product|null>
}

