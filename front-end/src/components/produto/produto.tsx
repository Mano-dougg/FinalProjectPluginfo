"use client";
import placeholder from "@/assets/imgs/produto-pag-individual.png"
import fiveStars from "@/assets/imgs/FIVE STARS.png"
import Image from "next/image";
import "./produto.css"

interface ProdutoProps {
    query: string;
  }

// vai receber como parâmetro o objeto produto com suas informações

const Produto: React.FC<ProdutoProps> = ({ query }) => {
    return (
        <section className="pag-individual-produto">
            <div className="individual-produto"> 
                <Image className="individual-produto-img" src={placeholder} width={736} height={477} alt="imagem do produto"/>
                
                <div className="individual-produto-info">
                    <h1>{query} facial Sensation</h1>  
                    <div className="row"><h2>(4,9)</h2> <Image src={fiveStars} alt="" width={136} height={24} className="individual-produto-av"/><h2>235 Avaliações</h2></div>   
                    <div className="promocao-frete"><div className="tag1">Promoção</div><div className="tag2">Frete Grátis</div></div>
                    <h3><span>RS 350,00</span></h3>
                    <h3>R$300,00</h3>
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
                        <p>O hidratante facial Sensation é o número um 
                            em cuidados com a pele.
                            Dermatologicamente testado, 
                            sua textura suave
                            e concentrada é vitál na manutenção da sua pele.

                            Cor branca
                            23 centímentros
                            embalagem descartada
                            entrega em todo o brasil

                            Qualidade garantida SHINE
                        </p>
                </div>

        </section>
    )
}

export default Produto;