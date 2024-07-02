import Image from "next/image";
import placeholderProduct from "@/assets/imgs/produto-placeholder.png";
import cart from "@/assets/imgs/shopping-cart-solid.png"

import "./card.css"

export default function Card() {
  return (
    <section className="card">
        <div className="cover">
            <Image src={placeholderProduct} alt="produto" className="card-img"/>
        </div>
        <h1>Serum Viitalice</h1>
        <h2><span>R$25,99</span> R$ 20,99</h2>
        <p>3x sem juros no cartão de crédito</p>
        <button> ADICIONE AO CARRINHO <Image src={cart} width={32} alt=""/></button>
    </section>
  );
}