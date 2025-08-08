import express, {Router} from "express"
import { AuthController } from "./authController"
abstract class AbstractRouter{
    protected router:Router;
    constructor(){
    this.router = express.Router()

    }
    init(){
        return this.router
    }
}

export class AuthRouter  extends AbstractRouter{
    constructor(
        private readonly authController:AuthController
    ){
        super() 
        this.router.post("/register", this.authController.register)  
    }
}