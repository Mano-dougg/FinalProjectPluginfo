"use client";
import placeholder from "@/assets/imgs/produto-pag-individual.png"
import fiveStars from "@/assets/imgs/FIVE STARS.png"
import Image from "next/image";
import "./produto.css"
import { useEffect, useState } from "react";
import { fetchProductById } from "@/actions/getProduct";

interface ProdutoProps {
    id: number;
  }

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

// vai receber como parâmetro o objeto produto com suas informações

const Produto: React.FC<ProdutoProps> = ({ id }) => {
    const [produto, setProduto] = useState<Produto | null>(null);
    console.log(id);

    useEffect(() => {
        const fetchProduto = async () => {
          const fetchedProduto = await fetchProductById(id);
          setProduto(fetchedProduto);
        };
    
        fetchProduto();
      }, [id]);

    const imgurl = produto?.imagePath[0]?.url;
    

    return (
        <section className="pag-individual-produto">
            <div className="individual-produto"> 
                <Image className="individual-produto-img" src={imgurl ? `https://shine-original.s3.sa-east-1.amazonaws.com/${imgurl}` : placeholder} width={736} height={477} alt="imagem do produto"/>
                
                <div className="individual-produto-info">
                    <h1> {produto?.nome}</h1>  
                    <div className="row"><h2>(4,9)</h2> <Image src={fiveStars} alt="" width={136} height={24} className="individual-produto-av"/><h2>235 Avaliações</h2></div>   
                    <div className="promocao-frete"><div className="tag1">Promoção</div><div className="tag2">Frete Grátis</div></div>
                    <h3><span>R${(produto?.preco)?.toFixed(2)}</span></h3>
                    <h3>R${(produto?.preco_alterado)?.toFixed(2)} </h3>
                    <p>OU 3X SEM JUROS NO CARTÃO DE CRÉDITO</p>
                    <label>Quantidade
                        <input type="number" min="0"/>
                    </label>
                    <button className="botao-comprar">COMPRAR</button>
                    <button className="botao-carrinho">CARRINHO</button>
                </div>    
            </div>

                <div className="individual-produto-descricao">
                        <h1> Descrição do produto </h1>
                        <p>{produto?.descricao}</p>
                </div>

        </section>
    )
}

export default Produto;