import styled from "styled-components";
import { createClient } from "@/prismicio";
import { CartR, ImgTeste, Star } from "../assets/imgs";

const Container = styled.div`
  margin-top: -2rem;
  height: auto;
  @media (max-width: 768px) {
    margin-top: -2rem;
    height: auto;
  }
`;

const Text = styled.h1`
  font-family: 'Oxygen', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 37.88px;
  letter-spacing: 0.05em;
  text-align: left;

  @media (max-width: 768px) {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 24.19px;
    letter-spacing: 0.02em;
  }
`;

const Conteudo = styled.div`
  padding: 63px 160px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
`;

const Estrelas = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
`;

const Preco = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const CardTitle = styled.div`
  cursor: pointer;
  color: blue;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Promotion = styled.h2`
  color: grey;
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.38px;
  letter-spacing: 0.02em;
  text-align: left;
  text-decoration: line-through;
`;

const Price = styled.h2`
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.38px;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--rose2);
`;

const Title = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

const Compra = styled.div`
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;

  height: 40px;

  &:hover {
    background: var(--grey);
    color: var(--black);
    border: 2px solid;
  }

  .ajustcart {
    width: 24px; 
    height: 24px; 
    img {
      width: 100%;
      height: 100%;
      object-fit: contain; 
    }
  }
`;

const Parcelamento = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 17.54px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const TextCart = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 23.38px;
  letter-spacing: 0.02em;
  text-align: left;
  padding: 5px;
`;

export async function Produtos() {
  const prismic = createClient();
  const section1 = await prismic.getByUID("section1", "main");

  return (
    <>
      <Container>
        <Conteudo>
          <Text>RECOMENDADOS</Text>
          <Itens>
            <ContainerCard>
              <div className="ajustimgRecomendados">
                <ImgTeste />
              </div>
              <Estrelas>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Estrelas>
              <Title>Serum Viitallice</Title>
              <Preco>
                <Promotion>R$350,00</Promotion>
                <Price>R$299,00</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
            <ContainerCard>
              <div className="ajustimgRecomendados">
                <ImgTeste />
              </div>
              <Estrelas>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Estrelas>
              <Title>Serum Viitallice</Title>
              <Preco>
                <Promotion>R$350,00</Promotion>
                <Price>R$299,00</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
            <ContainerCard>
              <div className="ajustimgRecomendados">
                <ImgTeste />
              </div>
              <Estrelas>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Estrelas>
              <Title>Serum Viitallice</Title>
              <Preco>
                <Promotion>R$350,00</Promotion>
                <Price>R$299,00</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
            <ContainerCard>
              <div className="ajustimgRecomendados">
                <ImgTeste />
              </div>
              <Estrelas>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Estrelas>
              <Title>Serum Viitallice</Title>
              <Preco>
                <Promotion>R$350,00</Promotion>
                <Price>R$299,00</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
            <ContainerCard>
              <div className="ajustimgRecomendados">
                <ImgTeste />
              </div>
              <Estrelas>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Estrelas>
              <Title>Serum Viitallice</Title>
              <Preco>
                <Promotion>R$350,00</Promotion>
                <Price>R$299,00</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
            <ContainerCard>
              <div className="ajustimgRecomendados">
                <ImgTeste />
              </div>
              <Estrelas>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </Estrelas>
              <Title>Serum Viitallice</Title>
              <Preco>
                <Promotion>R$350,00</Promotion>
                <Price>R$299,00</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
          </Itens>
        </Conteudo>
      </Container>
    </>
  );
}

export default Produtos;
