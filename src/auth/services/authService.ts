import { response } from "express";
import { NewUser } from "../model/authModel";
import { IAuthRepository } from "../repository/authRepository";

export class AuthServices{
    constructor(private readonly authRepositoy:IAuthRepository){}
    async registerUser(newUser:NewUser){
        const result = await this.authRepositoy.registerUser(newUser)
        return result
    }
}