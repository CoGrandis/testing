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

    describe("GET /users/:id",()=>{
        it("Si el id existe devuelve un json con datos del usuario",async()=>{
            // Arrange
            // Act            
            const response = await request(app).get("/users/1");

            // Assert
            expect(response.body).toEqual(
                expect.objectContaining({
                    id :1,
                    username:"maria",
                    email:"maria@gmail.com.ar",
                })
            )
        })
    })
    describe("GET /users",()=>{
        it("Devuelve un json con datos de los usuarios",async()=>{
            // Arrange
            // Act            
            const response = await request(app).get("/users");

            // Assert
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id :1,
                        username:"maria",
                        email:"maria@gmail.com.ar",
                    }),
                    expect.objectContaining({
                        id :2,
                        username:"maria2",
                        email:"maria2@gmail.com.ar",
                    })
                ])
                
            )
        })
    })
    
})