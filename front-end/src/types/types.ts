// criar tipo do objeto produto que será recebido pelo banco de dados
type Produto = {
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
    mainImage?: File,
    sideImages?: File[],
}

export default Produto;

// exemplo:
// type Produto = {
//     nome: String,
//     marca: String,
//     preco: number,
//     preco_alterado: number,
//     promocao: number,
//     descricao: string,
//     quantidade_carrinho: number,
//     face: boolean,
//     labios: boolean,
//     olhos: boolean,
//     kits: boolean,
//     sombrancelha: boolean,
//     unhas: boolean,
//     original: boolean,
//     imagePath: any,
// }

// export default Produto;


