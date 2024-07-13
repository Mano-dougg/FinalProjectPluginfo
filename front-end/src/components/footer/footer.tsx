'use client';

import styled from "styled-components";
import Mapa from "./retangle";
import FooterMobile from "./footerMobile";
import "./css.css";

const TagFooter = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;
  background: var(--black);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Table1 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Table2 = styled.div`
  width: 40%;
  background-image: var(--background-footer);
`;

const Colum1 = styled.div``;

const Campos = styled.div`
  padding: 19px 63px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Text = styled.a`
  color: var(--white);
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 36.57px;
  letter-spacing: 0.02em;
  text-align: left;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Colum2 = styled.div`
  color: var(--white);
  padding: 19px 63px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
`;

const Text2 = styled.a`
  font-family: 'Karla', sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 70.14px;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-decoration: none;
  color: var(--white);

  &:hover {
    text-decoration: underline;
  }
`;

const Span = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.9vw;
  font-weight: 700;
  line-height: 36.57px;
  letter-spacing: 0.02em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  color: var(--white);

  &:hover {
    text-decoration: underline;
  }
`;

const ContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 19px 63px;
`;

const Text3 = styled.h1`
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
  font-size: 2vw;
  font-weight: 700;
  line-height: 42.67px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const Despription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 2vw;
  font-weight: 700;
  line-height: 24.38px;
  letter-spacing: 0.02em;
  text-align: left;
  color: var(--white);
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const MapaStyled = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
`;

export default function Footer() {
  return (
    <TagFooter>
      <FooterMobile />
      <Container>
        <Table1>
          <Colum1>
            <Campos>
              <Text href="/">Home</Text>
              <Text href="/produtos">Loja</Text>
              <Text href="/cart">Carrinho</Text>
              <Text href="/">Marcas</Text>
            </Campos>
          </Colum1>
          <Colum2>
            <Text2 href="/">SHINE</Text2>
            <Span href="https://www.instagram.com/shineOficial">@shineOficial</Span>
          </Colum2>
        </Table1>
        <Table2>
          <ContainerTable>
            <Text3>Existe beleza em todos os lugares</Text3>
            <MapWrapper>
              <MapaStyled>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.53811549159!2d-38.51220542856487!3d-13.00136733235298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716049fc0d1034b%3A0x8b8c3d93f8fda741!2sInfoJr%20-%20UFBA!5e0!3m2!1spt-BR!2sbr!4v1720884959917!5m2!1spt-BR!2sbr"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </MapaStyled>
            </MapWrapper>
            <Despription>Uma Shine perto de você</Despription>
          </ContainerTable>
        </Table2>
      </Container>
    </TagFooter>
  );
}
