import { NewUser } from "../model/authModel";
import { prisma } from "src/database/prisma";
import { IAuthRepository } from "./authRepository";

export class PrismaAuthRepository implements IAuthRepository{
    async registerUser(newUser: NewUser): Promise<NewUser | null> {
        const result = await prisma.user.create({data:{
            email:newUser.email,
            username: newUser.username,
            password: newUser.password
        }})
        return result
    }
}