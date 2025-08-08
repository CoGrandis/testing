import express, { Router } from "express";
import { ProductService } from "./services/productServices";
import { IProductRepository } from "./repository/productRepository";
import { Product } from "./model/productModel";

abstract class AbstractRouter{
    protected router:Router;
    constructor(){
    this.router = express.Router()

    }
    init(){
        return this.router
    }
}
export class ProductRouter extends AbstractRouter{
    constructor(
        private readonly productService:ProductService
    ){ 
        super()
        this.router.get("/", async (req, res)=>{
           const result =  await this.productService.getAll()
           res.json(result)
        })
        this.router.get("/:id", async (req, res)=>{
            const id:number= parseInt(req.params.id)
            const result =  await this.productService.getProductById(id)
            res.json(result)
        })
        this.router.post("/", async(req, res) => {
            const {name, code, price} = req.body
            const producto:Product={
                code:code,
                name:name,
                price:price
            }
            const result = await this.productService.createProduct(producto)
            res.json(result)
        })
    }

}