import axios from "axios";

interface Produto {
    id: number;
    nome: string;
    marca: string;
    preco: number;
    preco_alterado: number;
    promocao: number;
    descricao: string;
    quantidade_carrinho: number;
    face: boolean;
    labios: boolean;
    olhos: boolean;
    kits: boolean;
    sombrancelha: boolean;
    unhas: boolean;
    original: boolean;
    imagePath: { id: number; url: string; produtoId: number }[];
  }

  export async function updateProduct(produto: Produto, imagesToDelete: string[], newImages: File[]) {
    try {
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
  
      imagesToDelete.forEach((imageUrl, index) => {
        formData.append(`imagesToDelete[${index}]`, imageUrl);
      });
  
      newImages.forEach((image: File) => {
        formData.append('newImages', image);
      });
  
      const response = await axios.put(`http://localhost:3030/editProduct/${produto.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data.msg);
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error);
    }
  };
  
