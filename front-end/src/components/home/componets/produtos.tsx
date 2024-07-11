import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { CartR, ImgTeste, Star } from "../assets/imgs";
import axios from 'axios';

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

const StarContainer = styled.div`
  display: flex;
`;

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('/searchProduct/all');
        if (!response.data || response.status !== 200) {
          throw new Error('Erro ao buscar produtos');
        }
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        setProdutos([]);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <Container>
      <Conteudo>
        <Text>RECOMENDADOS</Text>
        <Itens>
          {produtos.map((produto, index) => (
            <ContainerCard key={index}>
              <div className="ajustimgRecomendados">
                <ImgTeste src={produto.imagePath} alt={produto.nome} />
              </div>
              <StarContainer>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </StarContainer>
              <Title>{produto.nome}</Title>
              <Preco>
                <Promotion>R${produto.preco_original}</Promotion>
                <Price>R${produto.preco_promocao}</Price>
              </Preco>
              <Parcelamento>3x sem juros no cartão de crédito</Parcelamento>
              <Compra>
                <TextCart>ADICIONAR AO CARRINHO</TextCart>
                <div className="ajustcart">
                  <CartR />
                </div>
              </Compra>
            </ContainerCard>
          ))}
        </Itens>
      </Conteudo>
    </Container>
  );
};

export default Produtos;
