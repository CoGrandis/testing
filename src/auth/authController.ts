import { AuthServices } from "./services/authService";
import { Request, Response } from "express";
import { NewUser } from "./model/authModel";
import bcrypt from "bcrypt"

export class AuthController{
    constructor(private readonly authService:AuthServices){}
    async register(req:Request, res:Response) {
        try {
            const {email, username, password} = req.body
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const user:NewUser={
                email:email,
                username:username,
                password:hashedPassword,
            }
            const result = await this.authService.registerUser(user)
            res.status(200).json(result)        
        } catch (error) {
            console.log(error)
        }
    }
}