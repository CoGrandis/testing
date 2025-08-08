export interface User{
    id:number;
    username:string;
    email:string;
    password:string;
}

export type NewUser = Omit<User, "id">