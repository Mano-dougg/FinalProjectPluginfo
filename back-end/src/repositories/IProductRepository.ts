import Product from "../../entities/product"

export interface IProductRepository {
    findByName(nome: string): Promise<Product>;
    create(product: Product): Promise<void>;
    
}