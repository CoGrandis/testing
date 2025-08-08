import { describe, it, expect, assert } from "vitest";
import request from "supertest";
import { buildApp } from "src/app";
import { InMemoryProductRepository } from "src/productos/repository/InMemoryProductRepository";
import { container } from "src/dContainer/container";
import { Product } from "src/productos/model/productModel";

describe("app",()=>{
    describe("GET /api/products/:id",()=>{
        it("Si el id existe devuelve un json con datos del producto",async()=>{
            // Arrange
            const newProduct:Product={
                id:1,
                name: "producto",
                code: "ES43SS",
                price: 1000
            }
            const productRepository = new InMemoryProductRepository([newProduct])
            container.registerInstance("product-repository", productRepository)
            
            const app= buildApp()

            // Act            
            const response = await request(app).get("/api/products/1");
            // Assert
            expect(response.body).toStrictEqual(
                {
                    id: 1,
                    name: "producto",
                    code: "ES43SS",
                    price: 1000
                }
            )
        })
    })
    describe("GET /api/products",()=>{
        it("Devuelve un json con datos de todos los productos",async()=>{
            // Arrange
            // Act            
            const app= buildApp()
            const response = await request(app).get("/api/products");

            // Assert
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id: 1,
                        name: "producto",
                        code: "ES43SS",
                        price: 1000
                    }),
                    expect.objectContaining({
                        id: 2,
                        name: "tablet",
                        code: "AA33ERS",
                        price: 1000
                    })
                ])
                
            )
        })
    })
    
})