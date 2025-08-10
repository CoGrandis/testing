import { IProductRepository } from "./productRepository";
import { NewProduct, Product } from "../model/productModel";

export class InMemoryProductRepository implements IProductRepository {
    private contador: number;
    private products: Product[];
    constructor(initialProduct?: Product[]) {
        this.products = initialProduct ?? [];
        this.contador = initialProduct?.reduce((lastId, product) => (product.id > lastId ? product.id ?? 0 : lastId), 0) ?? 0;
    }
    async getAll(): Promise<Product[]> {
        return Promise.resolve(this.products)
    }

    async getProductById(id: number): Promise<Product | null> {
        return Promise.resolve(this.products.find(product => product.id === id) || null);
    }

    async createProduct(product: NewProduct): Promise<Product | null> {
        this.contador++;
        const newProduct: Product = {
            id: this.contador,
            code: product.code,
            name: product.name,
            price: product.price,

        }
        this.products.push(newProduct)
        return Promise.resolve(newProduct)
    }
    async updateProduct(product: NewProduct, id: number): Promise<Product | null> {
        return this.products.find(product => product.id === id) || null;


    }
}