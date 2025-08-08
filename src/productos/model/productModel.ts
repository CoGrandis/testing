export interface Product{
    id:number;
    name:string;
    code:string;
    price:number;
}

export type NewProduct = Omit<Product, "id">