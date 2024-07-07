// colocar aqui as requisições para o backend 


import axios from "axios";

// A função abaixo irá cadastrar um novo usuário e armazenar token e id no local storage 
// export async function createUser (name: string, email: string, password: string) {
//     const user = await postNewUser(name, email, password)

//     if(!user.data) return;
//     if(user.data.result === "error") return user;

//     localStorage.setItem('token', user.data.token);
//     localStorage.setItem('id', user.data.data.id);

//     return user.data
// };

// função de cadastro no banco
// async function postNewUser (name: string, email: string, password: string) {
//     const createdUser = await axios.post('http://localhost:8080/api/users/',
//         {
//             name, 
//             email,
//             password
//         }
//     )
//     return createdUser
// };




// FUNÇÕES NECESSÁRIAS

// FUNÇÕES DE FILTRAGEM
// (PODE FAZER VARIAS OU UMA SÓ QUE JÁ RECEBE UMA LISTA CONTENDO TODOS OS FILTROS E O PREÇO MINIMO E MAXIMO)

// 1- função de retornar todos os produtos cadastrados 
//       -> retornar lista de objetos tipo produtos (criar tipo na pasta types e importar aqui)

// 2- função para receber lista de objeto tipo produto, receber lista de marcas e categorias e filtrar por marca e categoria 
//       -> retornar lista de objetos tipo produto filtrada

// 3- função para receber uma lista de objetos tipo produto, uma lista de strings e verificar a promoção (switch case if etc) ex: 
//          se filter === "20% off" e o ((preço antigo - preço novo / preço antigo)=== 0,2) -> adicionar produto a lista
//ou        se filter === "30 a 40% off" e o ((preço antigo - preço novo / preço antigo)>=0,3 && (preço antigo - preço novo / preço antigo)<=0,4) -> adicionar produto a lista filtrada
//ou        se filter === "Frete grátis" -> adicionare produto a lista filtrada (todos os produtos deverão ter frete gratis mas não precisa ser informado no banco)
// -> retornar lista de objetos tipo produto filtrada

// 4- função para receber uma lista de objetos tipo produto, receber um preço minimo e maximo e verificar se o preço atual do produto está dentro desse intervalo
//          -> retornar lista de produtos filtrada


// FUNÇÃO DE CRIAÇÃO -------------------------------------------------------------------------------------------------
// import Produto from "@/types/types";

// export async function PostProduct (
//     {nome, marca, preco, preco_alterado, promocao, descricao, quantidade_carrinho,
//     face, labios, olhos, kits, sombrancelha, unhas, original,
//     imagePath}: Produto ) {
    
//     try {
//         const response = await axios.post("http://localhost:3030/PostProduct", {
//             nome: nome, 
//             marca: marca, 
//             preco: preco, 
//             preco_alterado: preco_alterado, 
//             promocao: promocao, 
//             descricao: descricao, 
//             quantidade_carrinho: quantidade_carrinho,
//             face: face, 
//             labios: labios, 
//             olhos: olhos, 
//             kits: kits, 
//             sombrancelha: sombrancelha, 
//             unhas: unhas, 
//             original: original,
//             imagePath: imagePath,
//         });

//         console.log(response);
// }
//     catch(error) {
//         console.log(error);
//     }
// };

import Produto from "@/types/types";

export async function PostProduct(produto: Produto) {
    const formData = new FormData();

    formData.append('nome', produto.nome);
    formData.append('marca', produto.marca);
    formData.append('preco', produto.preco.toString());
    formData.append('preco_alterado', produto.preco_alterado.toString());
    formData.append('promocao', produto.promocao.toString());
    formData.append('descricao', produto.descricao);
    formData.append('quantidade_carrinho', produto.quantidade_carrinho.toString());
    formData.append('face', produto.face.toString());
    formData.append('labios', produto.labios.toString());
    formData.append('olhos', produto.olhos.toString());
    formData.append('kits', produto.kits.toString());
    formData.append('sombrancelha', produto.sombrancelha.toString());
    formData.append('unhas', produto.unhas.toString());
    formData.append('original', produto.original.toString());

    if (produto.mainImage) {
        formData.append('mainImage', produto.mainImage);
    }

    if (produto.sideImages) {
        produto.sideImages.forEach((image, index) => {
            if (image) {
                formData.append(`sideImage${index}`, image);
            }
        });
    }

    try {
        const response = await axios.post("http://localhost:3030/PostProduct", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


// FUNÇÃO DE PESQUISA POR NOME -----------------------------------------------------------------------------------------
// função deve receber string e retornar lista de objetos tipo produto com aquela string no nome;



// FUNÇÃO DE EDIÇÃO ----------------------------------------------------------------------------------------------------
// função deve receber nome do produto (não será alterado)
// receber novo preço atual, preço alterado, 
// se faz parte de um conjunto (boolean), descrição, uma lista de tags(tipos/categorias) 
// uma lista de marcas, uma lista com urls de imagens e atualizar no produto informado;



// FUNÇÃO DE EXCLUSÃO--------------------------------------------------------------------------------------------------
// função deve receber nome de produto e realizar a exclusão dele no banco

