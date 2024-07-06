'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import ElipseComponent from './components/Ellipse 7';
import ImgTeste from './imgsteste/imgsTsx';
import ClearIcon from './imgsteste/clear';

const Container = styled.div`
  padding: 50px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
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
  flex-direction: row;
  gap: 100px;
`;

const Itens = styled.div`
  width: 600px;
  height: 197px;
  border-radius: 10px;
  background-color: var(--white);
  display: flex;
  align-items: flex-start;
  padding: 20px;
  overflow: hidden; 
`;

const Cupom = styled.div`
  flex: 1;
  padding: 10px;
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

export default function Cart() {
    //depois trocar pelo useState do Banco
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
      setQuantity(quantity + 1);
    };
    
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

  return (
    <Container>
      <TextCart>Seu Carrinho</TextCart>
      <Table>
        <Itens>
          <Item>
            <Elipese><ElipseComponent /></Elipese>
            <TagImg><ImgTeste /></TagImg>
            <Details>
              <Info>
                <Row1>
                  <Title>Hidrante facial Sensatoins</Title>
                  <ClearIcon/>
                </Row1>
                <Price>
                  <PrincePadrao>R$350,00</PrincePadrao>
                  <PriceDescont>R$300,00</PriceDescont>
                </Price>
                <Frete>Frete Gratis</Frete>
                <Quantidade>
                  <Quant>Quant</Quant>
                  <Button onClick={decrementQuantity} disabled={quantity === 1}>-</Button>
                  <Quant>{quantity}</Quant>
                  <Button onClick={incrementQuantity}>+</Button>
                </Quantidade>
              </Info>
            </Details>
          </Item>
        </Itens>
        
        <Cupom>Cupom de desconto aqui...</Cupom>

        
      </Table>
      <Itens>
          <Item>
            <Elipese><ElipseComponent /></Elipese>
            <TagImg><ImgTeste /></TagImg>
            <Details>
              <Info>
                <Row1>
                  <Title>Hidrante facial Sensatoins</Title>
                  <ClearIcon/>
                </Row1>
                <Price>
                  <PrincePadrao>R$350,00</PrincePadrao>
                  <PriceDescont>R$300,00</PriceDescont>
                </Price>
                <Frete>Frete Gratis</Frete>
                <Quantidade>
                  <Quant>Quant</Quant>
                  <Button onClick={decrementQuantity} disabled={quantity === 1}>-</Button>
                  <Quant>{quantity}</Quant>
                  <Button onClick={incrementQuantity}>+</Button>
                </Quantidade>
              </Info>
            </Details>
          </Item>
        </Itens>
    </Container>
  );
}
