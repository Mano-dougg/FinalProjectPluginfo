'use client';
import styled from "styled-components";
import { Seta } from "../assets/imgs";

const Container = styled.div`
  width: 100%;
  height: 297px;
  background-image: var(--background-section2);
  background-repeat: no-repeat; 
  background-size: cover; 
  margin-top: 2rem; 
  margin-bottom: 2rem; 

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const ContainerText = styled.div`
  padding: 63px 160px;

  @media (max-width: 768px) {
    padding: 32px 80px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-family: 'Inknut Antiqua', sans-serif;
  font-size: 45px;
  font-weight: 600;
  line-height: 116.06px;
  text-align: left;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 90px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
    line-height: 70px;
  }
`;

const TagP = styled.p`
  margin-top: -2rem;
  font-family: 'Montserrat';
  font-size: 2vw;
  font-weight: 400;
  line-height: 36.57px;
  text-align: left;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 3vw;
  }

  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.5rem; 
  margin-top: 1rem; 
`;

const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5vw;
  font-weight: 400;
  line-height: 36.57px;
  text-align: left;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }

  @media (max-width: 480px) {
    font-size: 4.5vw;
  }
`;

const Row = styled.div``;

export async function Conheca2() {
  return (
    <Container>
      <ContainerText>
        <Title>Ribeiro Wild</Title>
        <TagP>O perfume da liberdade</TagP>
        <Link>
          <Seta/>
          <Text>Conheça</Text>
        </Link>
      </ContainerText>
    </Container>
  );
}

export default Conheca2;
