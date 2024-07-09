'use client';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 297px;
  background-image: var(--background-section);
  background-repeat: no-repeat; 
  background-size: cover; 
  margin-top: 2rem; 
  margin-bottom: 2rem; 

  padding: 
`;

const Title = styled.h1`
  font-family: 'Inknut Antiqua', sans-serif;
font-size: 45px;
font-weight: 600;
line-height: 116.06px;
text-align: left;


  color:var(--white);
padding: 60px 63px 19px 63px;
`;

export async function Conheca() {
  return (
    <Container>
      <Title>Frequency Luan</Title>
      <p>Depois que  começa, não para</p>
    </Container>
  );
}

export default Conheca;
