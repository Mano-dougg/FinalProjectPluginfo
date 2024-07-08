import styled from "styled-components"
import { Marca1, Marca2, Marca3 } from "../assets/imgs"

const Container = styled.div`
width:100%;
height: 400px;
display:flex;
aling-itens:center;
justify-content:center;
 @media (max-width: 768px) {
    display:none;
  }

`
const Imagens = styled.div`
display:flex;
flex-direction:row;
gap: 30px;
margin-top: -5rem;
z-index:9999;
`

export function Slider2() {
    return(
        <Container> 
            <Imagens>
                <Marca1/>
                <Marca2/>
                <Marca3/>
            </Imagens>
        </Container>
        
    )
}

export default Slider2 