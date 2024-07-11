import Product from "../../../entities/product";
import { IProductRepository } from "../../repositories/IProductRepository";
import ICreateProductDTO from "./createProductDTO";


class CreateProductUserCase {
    constructor(
        private productRepository: IProductRepository
    ) {}
    
    async execute(data: ICreateProductDTO) {
        const productAlreadyExists = await this.productRepository.findByName(data.nome);

        if (productAlreadyExists) {
            throw new Error('product already exists')
        }
        
        const product = new Product(data)

        await this.productRepository.create(product);
    }
}

export default CreateProductUserCase;