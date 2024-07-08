import { fetchAllProducts } from "./getProduct";

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

export async function filterAllProducts(
  filtrosMaquiagem: string[],
  filtrosMarcas: string[],
  filtrosPromocoes: string[],
  preco: [number, number]

): Promise<Produto[]> {
  const fetchedProducts = await fetchAllProducts();

  if (!fetchedProducts) {
    return [];
  }

  return fetchedProducts.filter((produto) => {
    // Filtrar por maquiagem
    const maquiagemMatch = filtrosMaquiagem.length === 0 || filtrosMaquiagem.some((filtro) => {
      switch (filtro.toLowerCase()) {
        case 'face': return produto.face;
        case 'lábios': return produto.labios;
        case 'olhos': return produto.olhos;
        case 'kits': return produto.kits;
        case 'sobrancelha': return produto.sombrancelha;
        case 'unhas': return produto.unhas;
        case 'shine original': return produto.original;
        default: return false;
      }
    });

    // Filtrar por marcas
    const marcasMatch = filtrosMarcas.length === 0 || filtrosMarcas.includes(produto.marca);

    // Filtrar por promoções
    const promocoesMatch = filtrosPromocoes.length === 0 || filtrosPromocoes.some((filtro) => {
      switch (filtro.toLowerCase()) {
        case '20% off': return produto.promocao >= 0.2 && produto.promocao < 0.3;
        case '30% a 40% off': return produto.promocao >= 0.3 && produto.promocao <= 0.4;
        case '50% off': return produto.promocao === 0.5;
        case '60% off': return produto.promocao === 0.6;
        case '70% a 90% off': return produto.promocao >= 0.7 && produto.promocao <= 0.9;
        case 'Frete grátis': return true;
        default: return false;
      }
    });

    // Filtrar por preço
    const precoMatch = produto.preco >= preco[0] && produto.preco <= preco[1];

    // Retornar verdadeiro se todas as condições forem atendidas
    return maquiagemMatch && marcasMatch && promocoesMatch && precoMatch;
  });
}

export async function filterGivenProducts(
    products : Produto [],
    filtrosMaquiagem: string[],
    filtrosMarcas: string[],
    filtrosPromocoes: string[],
    preco: [number, number]
  
  ): Promise<Produto[]> {
    const fetchedProducts = await fetchAllProducts();
  
    if (!products) {
      return [];
    }
  
    return products.filter((produto) => {
      // Filtrar por maquiagem
      const maquiagemMatch = filtrosMaquiagem.length === 0 || filtrosMaquiagem.some((filtro) => {
        switch (filtro.toLowerCase()) {
          case 'face': return produto.face;
          case 'lábios': return produto.labios;
          case 'olhos': return produto.olhos;
          case 'kits': return produto.kits;
          case 'sobrancelha': return produto.sombrancelha;
          case 'unhas': return produto.unhas;
          case 'shine original': return produto.original;
          default: return false;
        }
      });
  
      // Filtrar por marcas
      const marcasMatch = filtrosMarcas.length === 0 || filtrosMarcas.includes(produto.marca);
  
      // Filtrar por promoções
      const promocoesMatch = filtrosPromocoes.length === 0 || filtrosPromocoes.some((filtro) => {
        switch (filtro.toLowerCase()) {
          case '20% off': return produto.promocao >= 0.2 && produto.promocao < 0.3;
          case '30% a 40% off': return produto.promocao >= 0.3 && produto.promocao <= 0.4;
          case '50% off': return produto.promocao === 0.5;
          case '60% off': return produto.promocao === 0.6;
          case '70% a 90% off': return produto.promocao >= 0.7 && produto.promocao <= 0.9;
          case 'Frete grátis': return true;
          default: return false;
        }
      });
  
      // Filtrar por preço
      const precoMatch = produto.preco >= preco[0] && produto.preco <= preco[1];
  
      // Retornar verdadeiro se todas as condições forem atendidas
      return maquiagemMatch && marcasMatch && promocoesMatch && precoMatch;
    });
  }
  