import axios from "axios";

interface ImagePath {
  id: number;
  url: string;
  produtoId: number;
}

interface Produto {
  id: number;
  nome: string;
  imagePath: ImagePath[];
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
}


export async function fetchProductByName(nomeProduto: string): Promise<Produto | null> {
  try {
    // const response = await axios.get<Produto>(`http://localhost:3030/searchProduct/${nomeProduto}`);
    const teste = "creme"
    const response = await axios.get<Produto>(`http://localhost:3030/searchProduct/${teste}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o produto:", error);
    return null;
  }
}



