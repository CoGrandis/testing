import { Product } from "../model/productModel";
import { IProductRepository } from "../repository/productRepository";
// separar la logica de la persistencia de datos
export class ProductService{
    constructor(private readonly productRepository:IProductRepository){}
    async getAll(){
        const result =  await this.productRepository.getAll()
        return result
    }
    async getProductById(id:number){
        const result = await this.productRepository.getProductById(id)
        return result
    }

    async createProduct(product:Product){
        const result = await this.productRepository.createProduct(product)
        return result
    }

    async updateProduct(product:Product, id:number){
        const result = await this.productRepository.updateProduct(product, id)
        return result
    }
}