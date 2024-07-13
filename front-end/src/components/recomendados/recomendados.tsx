'use client';

import { useEffect, useState } from "react";
import Card from "@/components/card/card";
import { fetchAllProducts } from "@/actions/getProduct";
import "@/app/produtos/page.css";

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

interface RecomendadosProps {
  quantidade: number;
}

export default function Recomendados({ quantidade }: RecomendadosProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const fetchedProdutos = await fetchAllProducts();
      if (fetchedProdutos) {
        setProdutos(fetchedProdutos);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="card-container">
      {produtos.slice(0, quantidade).map((produto) => (
        <Card key={produto.id} produto={produto} />
      ))}
    </div>
  );
};
