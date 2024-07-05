import styled from "styled-components";
import { colors } from "@/assets/color";
import PrimaryInputSearchIcon from "./primary-input";
import CartControll from "./CartControll";
import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

interface HeaderProps {}

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 50px;
  background-color: ${colors.black};

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 68%;
`;

const Column1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
`;

const Column2 = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.a`
  font-family: "Karla", sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 64.3px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${colors.rose1};

  @media screen and (max-width: 768px) {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    font-weight: 700;
    line-height: 30.48px;
    text-align: left;
  }
`;

const MinhaConta = styled.a`
  width: 150px; 
  white-space: nowrap; 
  font-family: 'Oxygen', sans-serif;
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 25.25px;
  letter-spacing: 0.08em;
  cursor: pointer;
  color: var(--white);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Cupons = styled.p`
  font-family: 'Oxygen', sans-serif;
  text-align: center;
  font-size: 1vw;
  font-weight: 700;
  line-height: 18.94px;
  white-space: nowrap; 
  color: var(--white);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default async function Header(props: HeaderProps) {
  const [data, setData] = useState(null);
  const prismic  = createClient()
      const tagheader = await prismic.getByUID("tagheader","main");
      console.log(tagheader)
  return (
    <TagHeader>
      <Column1>
        <Logo >{tagheader.data.logo}</Logo>
        <Container>
          <PrimaryInputSearchIcon placeholder="Pesquise na Shine..." />
          <MinhaConta>{tagheader.data.acount}</MinhaConta>
          <Cupons> CUPONS DA LOJA/ <br/>CUPONS</Cupons>
          <CartControll/>
        </Container>
      </Column1>
      <Column2>Column2</Column2>
    </TagHeader>
  );
}
