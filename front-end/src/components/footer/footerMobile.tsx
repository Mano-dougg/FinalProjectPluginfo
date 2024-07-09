import styled from "styled-components";
import { IconCart, IconHome, IconShop, IconUser } from "./assets/icons";

const Container = styled.div`
  display: none;
  background:var(--black);

  @media (max-width: 768px) {
    display: flex;
    width: 100vw;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 8px 0;
    gap: 28px;
    opacity: 1;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

const Icon = styled.span`
  cursor: pointer;
  color: white;

  &:active {
    color: pink;
    text-decoration: underline;
  }
`;

export function FooterMobile() {
  return (
    <Container>
      <IconHome/>
      <IconShop/>
      <IconCart/>
      <IconUser/>
    </Container>
  );
}

export default FooterMobile;
