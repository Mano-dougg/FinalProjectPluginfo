class Product { 
    public id: number;
    public nome: string;
    public marca: string;
    public preco: number;
    public preco_alterado: number;
    public promocao: number;
    public descricao: string;
    public quantidade_carrinho: number;
    public face: boolean;
    public labios: boolean;
    public olhos: boolean;
    public kits: boolean;
    public sombrancelha: boolean;
    public unhas: boolean;
    public original: boolean;


    constructor(props: Omit<Product, 'id'>, id?: string) {
        Object.assign(this, props);
    }
}

export default Product;