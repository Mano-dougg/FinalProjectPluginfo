import styled from "styled-components";
import { createClient } from "@/prismicio";
import { KitImg } from "../assets/imgs";

const Container = styled.div`
  background: var(--black);
  margin-top: 4rem;
  @media (max-width: 768px){
  margin-top: 2rem;
}
`;

const Text = styled.h1`
  color: var(--white);
  font-family: 'Oxygen', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 37.88px;
  letter-spacing: 0.05em;
  text-align: left;
  
  @media (max-width: 768px){
  
  font-family: 'Montserrat', sans-serif  ;
  font-size: 10px;
  font-weight: 700;
  line-height: 12.19px;
  letter-spacing: 0.02em;
  text-align: left;
}
`;

const Conteudo = styled.div`
  padding: 63px 160px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Itens = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3%;
  margin-top:4rem;

  @media (max-width: 768px) {
  margin-top: 20px;
    flex-direction: row; 
    align-items: center;
  }

  img {
    width: clamp(84px,22vw,349px);
    height: auto;
    max-width: 100%;
  }
`;

export async function Kits() {
  const prismic = createClient();
  const section1 = await prismic.getByUID("section1", "main");
  return (
    <> 
      <Container>
        <Conteudo> 
          <Text>{section1.data.campo1}</Text>
          <Itens>
            <KitImg />
            <KitImg />
            <KitImg />
          </Itens>
        </Conteudo>
      </Container>
    </>
  );
}

export default Kits;
