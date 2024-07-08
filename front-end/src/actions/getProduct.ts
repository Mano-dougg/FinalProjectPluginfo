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
    const response = await axios.get<Produto>(`http://localhost:3030/searchProduct/name/${nomeProduto}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar o produto:", error);
    return null;
  }
}

export async function fetchProductById(idProduto: number): Promise<Produto | null> {
    try {
      const response = await axios.get<Produto>(`http://localhost:3030/searchProduct/id/${idProduto}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      return null;
    }
  }


export async function fetchAllProducts(): Promise<Produto[] | null> {
  try {
    const response = await axios.get<Produto[]>('http://localhost:3030/searchProduct/all');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    return null;
  }
}

