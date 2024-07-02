import styled from "styled-components";
import { colors } from "@/assets/color";
import PrimaryInput from "./primary-input";

// Interface para as propriedades do componente Header (se necessário no futuro)
interface HeaderProps {}

// Estilização do componente Header
const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 50px;
  background-color: ${colors.black};
`;

const Column1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
`;

const Column2 = styled.div`
  /* Estilos para a segunda coluna, se necessário */
`;

const Logo = styled.a`
  font-family: "Karla", sans-serif;
  font-size: 55px;
  font-weight: 700;
  line-height: 64.3px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${colors.rose1};
`;


export default function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Column1>
        <Logo>Shine</Logo>
        <PrimaryInput placeholder="Pesquise na Shine..." />
      </Column1>
      <Column2>Colum2</Column2>
    </TagHeader>
  );
}
