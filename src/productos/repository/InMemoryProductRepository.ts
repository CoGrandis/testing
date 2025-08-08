import { IProductRepository } from "./productRepository";
import { Product } from "../model/productModel";

export class InMemoryProductRepository implements IProductRepository {
    private contador: number = 0;
    private products: Product[];
    constructor(initialProduct?: Product[]) {
        this.products = initialProduct ?? [];
        this.contador = initialProduct?.reduce((lastId, product) =>
            (product.id > lastId ? product.id : lastId), 0) ?? 0;
    }
    async getAll(): Promise<Product[]> {
        return Promise.resolve(this.products)
    }

    async getProductById(id: Number): Promise<Product | null> {
        return Promise.resolve(this.products.find(product => product.id === id) || null);
    }

    async createProduct(product: Product): Promise<Product | null> {
        const newProduct: Product = {
            id: this.contador + 1,
            code: product.code,
            name: product.name,
            price: product.price,

        }
        this.products.push(newProduct)
        return Promise.resolve(newProduct)
    }
    async updateProduct(product: Product, id: number): Promise<Product | null> {
        return this.products.find(product => product.id === id) || null;


    }
}