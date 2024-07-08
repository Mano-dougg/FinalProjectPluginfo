'use client'
import styled from "styled-components";
import { createClient } from "@/prismicio";

interface Kits {}

const Container = styled.div`
background:var(--black);
height: 553px;

`
const Text = styled.h1`
color:var(--white);
padding: 19px 63px 19px 63px;
`
export async function Kits(props: Kits) {

    const prismic  = createClient()
  const section1 = await prismic.getByUID("section1","main");
  return (
    <> 
    <Container>
      <Text>{section1.data.campo1}</Text>
    </Container>
      </>
  );
}
export default Kits