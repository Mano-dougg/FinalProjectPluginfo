interface ICreateProductDTO {
    id: number,
    nome: string,
    marca: string,
    preco: number,
    preco_alterado: number,
    promocao: number,
    descricao: string,
    quantidade_carrinho: number,
    face: boolean,
    labios: boolean,
    olhos: boolean,
    kits: boolean,
    sombrancelha: boolean,
    unhas: boolean,
    original: boolean,
}

export default ICreateProductDTO;