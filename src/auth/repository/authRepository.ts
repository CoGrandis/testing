import { User , NewUser} from "../model/authModel";

export interface IAuthRepository{
    registerUser(newUser:NewUser):Promise<NewUser|null>
}