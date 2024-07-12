'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ElipseComponent from './components/Ellipse 7';
import ImgTeste from './imgsteste/imgsTsx';
import ClearIcon from './imgsteste/clear';
import axios from 'axios';

interface Cart {
  id: number;
  nome: string;
  imagePath: string[];
  preco: number;
  preco_alterado: number;
  frete: boolean;
  quantidade_carrinho: number;
}

const Container = styled.div`
  display: flex;
  padding: 50px;
  margin-top: 25px;
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 50px;
`;

const RightColumn = styled.div`
  width: 300px;
`;

const TextCart = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: 0.05em;
  text-align: left;
  margin-bottom: 20px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Itens = styled.div`
  width: 50vw;
  height: 197px;
  border-radius: 10px;
  background-color: var(--white);
  display: flex;
  align-items: flex-start;
  padding: 20px;
  overflow: hidden;
`;

const Cupom = styled.div`
  padding: 20px;
  background-color: var(--grey);
  border-radius: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const Elipese = styled.div`
  padding: 10px;
  margin-right: 10px;
`;

const TagImg = styled.div`
  margin-left: 10px;
  height: 100%;
`;

const Details = styled.div`
  margin-left: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
width:18vw;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.38px;
  text-align: start;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 30px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.7rem;
  gap: 30px;
`;

const PrincePadrao = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  letter-spacing: 0.05em;
  text-align: left;
  color: var(--grey);
  text-decoration: line-through;
`;

const PriceDescont = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  letter-spacing: 0.05em;
  text-align: left;
`;

const Frete = styled.h1`
  margin-top: 0.7rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 18.29px;
  letter-spacing: 0.05em;
  text-align: left;
  color: var(--green);
`;

const Quantidade = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  letter-spacing: 0.05em;
  text-align: left;
`;

const Quant = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  letter-spacing: 0.05em;
  text-align: left;
`;

const Button = styled.button`
  background: var(--grey); 
  border-radius: 50px; 
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;
  width: 30px;  
  height: 30px; 

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Loading = () => (
  <Container>
    <TextCart> carrinho vazio</TextCart>
  </Container>
);

const Cart = () => {
  const [produtos, setProdutos] = useState<Cart[]>([]);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get(
          "http://localhost:3030/searchProduct/cart"
        );
        const dados = response.data; 
        console.log(dados.marca)
        setProdutos(dados);
        console.log(dados)
        
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      }
    }
    fetchProdutos();

    if (typeof window !== 'undefined') {
      fetchProdutos();
    }
  }, []);

  if (!produtos.length) {
    return <Loading />;
  }

  return (
    <Container>
      <LeftColumn>
        <TextCart>Seu Carrinho</TextCart>
        <Table>
          {produtos.map((produto) => (
            <Itens key={produto?.id}>
              <Item>
                <Elipese>
                  <ElipseComponent />
                </Elipese>
                <TagImg>
                  <ImgTeste />
                </TagImg>
                <Details>
                  <Info>
                    <Row1>
                      <Title>{produto?.nome}</Title>
                      <ClearIcon />
                    </Row1>
                    <Price>
                      <PrincePadrao>R${produto?.preco}</PrincePadrao>
                      <PriceDescont>
                        R${produto?.preco_alterado}
                      </PriceDescont>
                    </Price>
                    {produto?.frete && <Frete>Frete Grátis</Frete>}
                    <Quantidade>
                      <Quant>Quant</Quant>
                      <Button>
                        -
                      </Button>
                      <Quant>{quantity}</Quant>
                      <Button >+</Button>
                    </Quantidade>
                  </Info>
                </Details>
              </Item>
            </Itens>
          ))}
        </Table>
      </LeftColumn>
      <RightColumn>
        <Cupom>Cupom de desconto aqui...</Cupom>
      </RightColumn>
    </Container>
  );
};

export default Cart;
