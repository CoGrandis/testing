import { Product , NewProduct} from "../model/productModel";

export interface IProductRepository{
    getAll(): Promise<Product[]> ,
    getProductById(id:Number): Promise<Product|null>
    createProduct(product:NewProduct): Promise<Product|null>
    updateProduct(product:Product, id:number): Promise<Product|null>
}

