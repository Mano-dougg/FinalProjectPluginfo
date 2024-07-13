'use client'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ElipseComponent from './components/Ellipse 7';
import ImgTeste from './imgsteste/imgsTsx';
import ClearIcon from './imgsteste/clear';
import axios from 'axios';
import Image from 'next/image';
import './css.css'

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  preco_alterado: number;
  frete: boolean;
  quantidade_carrinho: number;
  imagePath: { id: number; url: string; produtoId: number }[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  
  @media (min-width: 768px) {
    padding: 63px 130px;
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const RightColumn = styled.div`
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

const TextCart = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: 0.05em;
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display:none;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ItemContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  background-color: var(--white);
  display: flex;
  align-items: flex-start;
  padding: 20px;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    background-color: grey;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
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
  flex-direction: row;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Elipese = styled.div`
  padding: 10px;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

const TagImg = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-left: 10px;
    margin-bottom: 0;
    height: 100%;
    justify-content: flex-start;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 10px;

  @media (min-width: 768px) {
    margin-left: 10px;
    padding-left: 0;
  }
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
  
  @media (max-width: 768px) {
    font-size: 14px; /* Ajuste de exemplo */
    line-height: 20px; /* Ajuste de exemplo */
  }
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
  @media (max-width: 768px) {
    font-size: 12px; 
    font-weight: 700;
    line-height: 32px; 
    text-align: left; 
  }
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

  @media (max-width: 768px) {
    font-size: 10px; 
    line-height: 18px;
  }
`;

const PriceDescont = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px; 
    line-height: 18px; 
  }
`;

const Frete = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-align: left;
  color: var(--green);

  @media (max-width: 768px) {
    font-size: 10px; 
    line-height: 14px; 
  }
`;

const Quantidade = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px; 
  margin-bottom: 10px; 

  @media (max-width: 768px) {
    flex-direction: row; 
    align-items: center; 
    text-align: center; 
  }
`;

const Quant = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 10px; 
    line-height: 18px;
    
  }
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
  
  @media (max-width: 768px) {
    font-size: 10px; 
    width: 20px;
    height: 20px; 
  }
`;

const TextQuant = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  letter-spacing: 0.05em;
  text-align: left;
@media (max-width: 768px) {
    font-size: 10px; 
    line-height: 18px; 
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
                  <div className='blockslipse'>
                  <ElipseComponent />
                  </div>
                </Elipese>
                <TagImg>
                  <div className='imgproduct'> 
                <Image
            src={produto.imagePath && `https://shine-original.s3.sa-east-1.amazonaws.com/${produto.imagePath[0]?.url}`}
            alt={produto.nome}
            width={253}
            height={253}
          />
          </div>
                </TagImg>
                <Details>
                  <Info>
                    <Row1>
                      <Title>{produto.nome}</Title>
                      <ClearIcon onClick={() => handleClear(produto.id)} />
                    </Row1>
                <TextCart>Frete gratis</TextCart>

                    <Price>
                      <PrincePadrao>R${produto.preco}</PrincePadrao>
                      <PriceDescont>
                        R${produto.preco_alterado}
                      </PriceDescont>
                    </Price>
                    {produto.frete && <Frete>Frete Grátis</Frete>}
                    <Quantidade>
                      <TextQuant>Quant</TextQuant>
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
        <Cupom>Criar component cupons </Cupom>
      </RightColumn>
    </Container>
  );
};

export default Cart;
