import styled from "styled-components";
import { Seta } from "../assets/imgs";


const Container = styled.div`
  width: 100%;
  height: 320px;
  background-image: var(--background-section3); 
  background-size: cover; 
  margin-top: 2rem; 
  margin-bottom: 2rem; 

  @media (max-width: 768px) {
    height: 100%;
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
  text-align: end; 
  color: var(--black);

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 90px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 70px;
  }
`;

const TagP = styled.p`
  margin-top: -2rem;
  font-family: 'Montserrat';
  font-size: 3vw;
  font-weight: 400;
  line-height: 36.57px;
  text-align: end; 
  color: var(--black);

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem; 
  margin-top: 1rem; 
  margin-right: 10rem;
  @media (max-width: 768px) {
margin-right: 5vw;
}
`;

const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  display:flex;
  flex-direction:row-reverse;
  font-size: 2.5vw;
  font-weight: 400;
  line-height: 36.57px;
  text-align: end;
  
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 3.5vw;
  }

  @media (max-width: 480px) {
    font-size: 4.5vw;
  }
`;

export async function Conheca3() {
  return (
    <Container>
      <ContainerText>
        <Title>Coleção Raibow Pride</Title>
        <TagP>Celebre quem você é</TagP>
      </ContainerText>
      <Link>
        <Text>Conheça</Text>
        <Seta />
      </Link>
    </Container>
  );
}

export default Conheca3;
