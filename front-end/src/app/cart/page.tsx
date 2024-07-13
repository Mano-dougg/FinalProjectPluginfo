'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ElipseComponent from './components/Ellipse 7';
import ImgTeste from './imgsteste/imgsTsx';
import ClearIcon from './imgsteste/clear';
import axios from 'axios';

interface CartItem {
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
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  width: 100%;
  max-width: 300px;
`;

const TextCart = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
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

const ItemContainer = styled.div`
  width: 100%;
  max-width: 600px;
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
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: start;
  margin-bottom: 10px;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PrincePadrao = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;
  color: var(--grey);
  text-decoration: line-through;
`;

const PriceDescont = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;
`;

const Frete = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-align: left;
  color: var(--green);
`;

const Quantidade = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Quant = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;
  margin: 0 5px;
`;

const Button = styled.button`
  background: var(--grey); 
  border-radius: 50px; 
  font-size: 16px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
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
  const [produtos, setProdutos] = useState<CartItem[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get("http://localhost:3030/searchProduct/cart");
        const dados = response.data;
        setProdutos(dados);
        
        console.log(dados)
        
        const initialQuantities = dados.reduce((acc: { [key: number]: number }, produto: CartItem) => {
          acc[produto.id] = produto.quantidade_carrinho;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    fetchProdutos();
  }, []);

  const updateQuantityInDB = async (id: number, newQuantity: number) => {
    try {
      await axios.put(`http://localhost:3030/updateCart/${id}`, {
        quantidade_carrinho: newQuantity
      });
    } catch (error) {
      console.error("Erro ao atualizar quantidade:", error);
    }
  };

  const handleClear = async (id: number) => {
    try {
      await updateQuantityInDB(id, 0);
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: 0
      }));
    } catch (error) {
      console.error("Erro ao limpar quantidade no carrinho:", error);
    }
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities(prevQuantities => {
      const newQuantity = Math.max(0, prevQuantities[id] + delta);
      updateQuantityInDB(id, newQuantity);
      return {
        ...prevQuantities,
        [id]: newQuantity
      };
    });
  };

  if (!produtos.length) {
    return <Loading />;
  }

  return (
    <Container>
      <LeftColumn>
        <TextCart>Seu Carrinho</TextCart>
        <Table>
          {produtos.map((produto) => (
            <ItemContainer key={produto.id}>
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
                      <Title>{produto.nome}</Title>
                      <ClearIcon onClick={() => handleClear(produto.id)} />
                    </Row1>
                    <Price>
                      <PrincePadrao>R${produto.preco}</PrincePadrao>
                      <PriceDescont>
                        R${produto.preco_alterado}
                      </PriceDescont>
                    </Price>
                    {produto.frete && <Frete>Frete Grátis</Frete>}
                    <Quantidade>
                      <Button onClick={() => handleQuantityChange(produto.id, -1)}>
                        -
                      </Button>
                      <Quant>{quantities[produto.id]}</Quant>
                      <Button onClick={() => handleQuantityChange(produto.id, 1)}>
                        +
                      </Button>
                    </Quantidade>
                  </Info>
                </Details>
              </Item>
            </ItemContainer>
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
