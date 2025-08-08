import express, { Router } from "express";
import { ProductService } from "./services/productServices";
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
            try {
               const result =  await this.productService.getAll()
               res.json(result)        
            } catch (error) {
                console.log(error)
            }
        })
        this.router.get("/:id", async (req, res)=>{
            try {
                const id:number= parseInt(req.params.id)
                const result =  await this.productService.getProductById(id)
                res.json(result)
                
            } catch (error) {
                console.log(error)                
            }
        })
        this.router.post("/", async(req, res) => {
            try {
            const {name, code, price} = req.body
            const producto:Product={
                code:code,
                name:name,
                price:price
            }
            const result = await this.productService.createProduct(producto)
            res.json(result)
                
            } catch (error) {
                console.log(error)
            }
        })
        this.router.put("/:id", async(req,res)=>{
            const id:number= parseInt(req.params.id)
            const {name, code, price} = req.body
            const producto:Product={
                code:code,
                name:name,
                price:price
            }
            const result = await this.productService.updateProduct(producto, id)
            res.json(result)
        })
    }

}