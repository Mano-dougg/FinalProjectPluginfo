'use client';

import placeholder from "@/assets/imgs/produto-pag-individual.png";
import fiveStars from "@/assets/imgs/FIVE STARS.png";
import Image from "next/image";
import "./produto.css";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/actions/getProduct";
import { updateCartProduct } from "@/actions/cartActions";
import Recomendados from "../recomendados/recomendados";
import Loader from "../loader/loader";
import Link from "next/link";

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

const Produto: React.FC<ProdutoProps> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [produto, setProduto] = useState<Produto | null>(null);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [indice, setIndice] = useState<number>(0);
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProduto = async () => {
      const fetchedProduto = await fetchProductById(id);
      setProduto(fetchedProduto);
      if (fetchedProduto) {
        setQuantidade(fetchedProduto.quantidade_carrinho);
      }
    };

    fetchProduto();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntering(false);
      setTimeout(() => {
        if (produto && (indice + 1 < produto.imagePath.length)) {
          setIndice(indice + 1);
        } else {
          setIndice(0);
        }
        setEntering(true);
      }, 400); 
    }, 4000); 

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [indice, produto]);

  const handleCartClick = async () => {
    if (produto) {
      try {
        await updateCartProduct(produto.id, quantidade);
        alert("Carrinho atualizado com sucesso");
      } catch (error) {
        alert("Erro ao atualizar o carrinho: " + error);
      }
    }
  };

  const handleQuantidadeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(e.target.value);
    setQuantidade(newQuantity);
    if (produto) {
      try {
        await updateCartProduct(produto.id, newQuantity);
      } catch (error) {
        alert("Erro ao atualizar o carrinho: " + error);
      }
    }
  };

  if (loading) {
    return (<Loader />);
  } else {
    return (
      <section className="pag-individual-produto">
        <div className="individual-produto">
          <div className="individual-produto-img-container">
            {produto?.imagePath.map((image, idx) => (
              <Image 
                key={idx} 
                className={`individual-produto-img ${indice === idx ? 'entering' : 'exiting'}`} 
                src={image.url ? `https://shine-original.s3.sa-east-1.amazonaws.com/${image.url}` : placeholder} 
                width={736} 
                height={477} 
                alt="imagem do produto"
              />
            ))}
          </div>

          <div className="individual-produto-info">
            <h1>{produto?.nome}</h1>  
            <div className="row">
              <h2>(4,9)</h2> 
              <Image src={fiveStars} alt="" width={136} height={24} className="individual-produto-av" />
              <h2>235 Avaliações</h2>
            </div>   
            <div className="promocao-frete">
              <div className="tag1">Promoção</div>
              <div className="tag2">Frete Grátis</div>
            </div>
            <h3><span>R${(produto?.preco)?.toFixed(2)}</span></h3>
            <h3>R${(produto?.preco_alterado)?.toFixed(2)}</h3>
            <p>OU 3X SEM JUROS NO CARTÃO DE CRÉDITO</p>
            <label id="qtd-input-label">
              Quantidade
              <input
                id="qtd-input"
                type="number" 
                min="0" 
                value={quantidade} 
                onChange={handleQuantidadeChange}
              />
            </label>
            <button className="botao-comprar">COMPRAR</button>
            <Link href="/cart"><button className="botao-carrinho">CARRINHO</button></Link>
          </div>    
        </div>

        <div className="individual-produto-descricao">
          <h1> Descrição do produto </h1>
          <p>{produto?.descricao}</p>
        </div>

        <h1 className="title-recomendados">Recomendados</h1>
        <div className="recomendados3"><Recomendados quantidade={3} /></div>
        <div className="recomendados2"><Recomendados quantidade={2} /></div>
      </section>
    );
  }
};

export default Produto;


// 'use client';
// import placeholder from "@/assets/imgs/produto-pag-individual.png"
// import fiveStars from "@/assets/imgs/FIVE STARS.png"
// import Image from "next/image";
// import "./produto.css"
// import { useEffect, useState } from "react";
// import { fetchProductById } from "@/actions/getProduct";
// import { updateCartProduct } from "@/actions/cartActions";
// import Recomendados from "../recomendados/recomendados";
// import Loader from "../loader/loader";

// interface ProdutoProps {
//     id: number;
// }

// interface Produto {
//   id: number;
//   nome: string;
//   marca: string;
//   preco: number;
//   preco_alterado: number;
//   promocao: number;
//   descricao: string;
//   quantidade_carrinho: number;
//   face: boolean;
//   labios: boolean;
//   olhos: boolean;
//   kits: boolean;
//   sombrancelha: boolean;
//   unhas: boolean;
//   original: boolean;
//   imagePath: { id: number; url: string; produtoId: number }[];
// }

// // vai receber como parâmetro o objeto produto com suas informações
// const Produto: React.FC<ProdutoProps> = ({ id }) => {

//   const[loading, setLoading] = useState<boolean>(true);

//   const [produto, setProduto] = useState<Produto | null>(null);
//   const [quantidade, setQuantidade] = useState<number>(0);
//   const [indice, setIndice]=useState<number>(0);
//   const [entering, setEntering] = useState(true);

//   useEffect(() => {

//     setLoading(true);
//     const fetchProduto = async () => {
//       const fetchedProduto = await fetchProductById(id);
//       setProduto(fetchedProduto);
//       if (fetchedProduto) {
//         setQuantidade(fetchedProduto.quantidade_carrinho);
//       }
//     };

//     fetchProduto();
//     setLoading(false);
//   }, [id]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setEntering(false);
//       setTimeout(() => {
//         if (produto && ((indice + 1) < produto.imagePath.length)) {
//           setIndice(indice + 1);
//         } else {
//           setIndice(0);
//         }
//         setEntering(true);
//       }, 500); // Correspondente ao tempo da transição CSS
//     }, 5000); // 5 segundos

//     return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
//   }, [indice, produto]);

//   const handleCartClick = async () => {
//     if (produto) {
//       try {
//         await updateCartProduct(produto.id, quantidade);
//         alert("Carrinho atualizado com sucesso");
//       } catch (error) {
//         alert("Erro ao atualizar o carrinho: " + error);
//       }
//     }
//   };

//   if (loading){
//     return (<Loader/>);
//   }

//   else{
//   return (
//     <section className="pag-individual-produto">
//       <div className="individual-produto">
//         <div className="individual-produto-img-container">
//           {produto?.imagePath.map((image, idx) => (
//             <Image 
//               key={idx} 
//               className={`individual-produto-img ${indice === idx ? 'entering' : 'exiting'}`} 
//               src={image.url ? `https://shine-original.s3.sa-east-1.amazonaws.com/${image.url}` : placeholder} 
//               width={736} 
//               height={477} 
//               alt="imagem do produto"
//             />
//           ))}
//         </div>
        
//         <div className="individual-produto-info">
//           <h1>{produto?.nome}</h1>  
//           <div className="row">
//             <h2>(4,9)</h2> 
//             <Image src={fiveStars} alt="" width={136} height={24} className="individual-produto-av"/>
//             <h2>235 Avaliações</h2>
//           </div>   
//           <div className="promocao-frete">
//             <div className="tag1">Promoção</div>
//             <div className="tag2">Frete Grátis</div>
//           </div>
//           <h3><span>R${(produto?.preco)?.toFixed(2)}</span></h3>
//           <h3>R${(produto?.preco_alterado)?.toFixed(2)}</h3>
//           <p>OU 3X SEM JUROS NO CARTÃO DE CRÉDITO</p>
//           <label id="qtd-input-label">
//             Quantidade
//             <input
//               id="qtd-input"
//               type="number" 
//               min="0" 
//               value={quantidade} 
//               onChange={(e) => setQuantidade(Number(e.target.value))}
//             />
//           </label>
//           <button className="botao-comprar">COMPRAR</button>
//           <button className="botao-carrinho" onClick={handleCartClick}>CARRINHO</button>
//         </div>    
//       </div>

//       <div className="individual-produto-descricao">
//         <h1> Descrição do produto </h1>
//         <p>{produto?.descricao}</p>
//       </div>

//       <h1 className="title-recomendados">Recomendados</h1>
//       <div className="recomendados3"><Recomendados quantidade={3}/></div>
//       <div className="recomendados2"><Recomendados quantidade={2}/></div>
//     </section>
//   );
// }};

// export default Produto;
