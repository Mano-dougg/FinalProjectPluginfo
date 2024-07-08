import React, { useEffect, useState } from "react";
import Image from "next/image";
import placeholderProduct from "@/assets/imgs/produto-placeholder.png";
import cart from "@/assets/imgs/shopping-cart-solid.png";
import { fetchProductByName } from "@/actions/getProduct"; // Importe a função fetchProductByName

import "./card.css";

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

export default function Card() {
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      const fetchedProduto = await fetchProductByName("Batom");
      setProduto(fetchedProduto);
    };

    fetchProduto();
  }, []);

  const imgurl = produto?.imagePath[0]?.url

  return (
    <section className="card">
      <div className="cover">
        <Image
          src={imgurl? `https://shine-original.s3.sa-east-1.amazonaws.com/${imgurl}` : placeholderProduct}
          alt={produto?.nome || "produto"}
          className="card-img"
          width={370}
          height={370}
        />
      </div>
      <h1>{produto?.nome || "Nome do Produto"}</h1>
      <h2>
        <span>R${produto?.preco_alterado.toFixed(2) || "0,00"}</span> R$ {produto?.preco.toFixed(2) || "0,00"}
      </h2>
      <p>3x sem juros no cartão de crédito</p>
      <button>
        ADICIONE AO CARRINHO <Image src={cart} width={32} alt="" />
      </button>
    </section>
  );
}


// import Image from "next/image";
// import placeholderProduct from "@/assets/imgs/produto-placeholder.png";
// import cart from "@/assets/imgs/shopping-cart-solid.png"

// import "./card.css"

// export default function Card() {
//   return (
//     <section className="card">
//         <div className="cover">
//             <Image src={placeholderProduct} alt="produto" className="card-img"/>
//         </div>
//         <h1>Serum Viitalice</h1>
//         <h2><span>R$25,99</span> R$ 20,99</h2>
//         <p>3x sem juros no cartão de crédito</p>
//         <button> ADICIONE AO CARRINHO <Image src={cart} width={32} alt=""/></button>
//     </section>
//   );
// }