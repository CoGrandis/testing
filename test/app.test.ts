import { describe, it, expect, assert } from "vitest";
import request from "supertest";
import { app } from "src/app";
describe("app",()=>{
    describe("GET / ", ()=>{
        it("Deberia devolver un código 200", async()=>{
            // Arrange
            // Act
            const response = await request(app).get("/");
            // Assert
            expect(response.statusCode).toBe(200);
        })
        it("Deberia devolver Hello World", async()=>{
            // Arrange
            // Act
            const response = await request(app).get("/");
            // Assert
            expect(response.text).toBe("Hello World");
        })
    })

    describe("GET /api/products/:id",()=>{
        it("Si el id existe devuelve un json con datos del producto",async()=>{
            // Arrange
            // Act            
            const response = await request(app).get("/api/products/1");

            // Assert
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: 1,
                    name: "producto",
                    code: "ES43SS",
                    price: 1000
                })
            )
        })
    })
    describe("GET /api/products",()=>{
        it("Devuelve un json con datos de todos los productos",async()=>{
            // Arrange
            // Act            
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