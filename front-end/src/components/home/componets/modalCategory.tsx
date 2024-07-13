import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuIconComponent } from '../assets/imgs';

interface MenuBurgerProps {
  className?: string;
}

const MenuBurgerWrapper = styled.div`
  display: flex; 
  justify-content: center; 
`;

const MenuBurgerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const MenuIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 10px;
  display: flex;
  align-items: center;
  gap:13px;
`;

const MenuIconText = styled.span`
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
font-size: 15px;
font-weight: 500;
line-height: 18.29px;
letter-spacing: 0.08em;
text-align: center;

color:var(--white);
`;

const MenuItems = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 120%;
  left:0;
  right: 0;
  z-index: 1;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: no-wrap;
  gap: 15px; 
  background:var(--grey);
  width:736px;
  height: 162px;
  border-radius:10px 10px 10px 10px;
  aling-items:center;
  z-index:99999;
  
  
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 10px 15px;
  color: #333333;
  text-decoration: none;

  &:hover {
    color: var(--rose2);
    border-radius:10px 10px 10px 10px;
   
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const MenuTitle = styled.h1`
  font-family: 'Montserrat',sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 24.38px;
text-align: left;


`;

const MenuDescription = styled.p`
    font-family: 'Karla',sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 17.54px;
    text-align: left;

  color: var(--black);
  margin: 0;
`;

const MenuBurger: React.FC<MenuBurgerProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuBurgerWrapper>
      <MenuBurgerContainer className={className}>
        <MenuIcon onClick={toggleMenu}>
          <MenuIconComponent />
          <MenuIconText>Nossas Categorias</MenuIconText>
          {isOpen ? '▴' : '▾'}
        </MenuIcon>
        <MenuItems $isOpen={isOpen}>
          <MenuItem>
            <MenuContent>
              <MenuTitle>Labios</MenuTitle>
              <MenuDescription>Baton</MenuDescription>
              <MenuDescription>Gloss</MenuDescription>
            </MenuContent>
          </MenuItem>
          <MenuItem>
            <MenuContent>
              <MenuTitle>Olhos</MenuTitle>
              <MenuDescription>Rimel</MenuDescription>
              <MenuDescription>Delineadores</MenuDescription>
            </MenuContent>
          </MenuItem>
          <MenuItem>
            <MenuContent>
              <MenuTitle>Kits</MenuTitle>
              <MenuDescription>Skincare</MenuDescription>
              <MenuDescription>Perfume</MenuDescription>
            </MenuContent>
          </MenuItem>
          
          

          <MenuItem>
            <MenuContent>
              <MenuTitle>Sombrancelhas</MenuTitle>
              <MenuDescription>Olho</MenuDescription>
              <MenuDescription>Lápis</MenuDescription>
            </MenuContent>
          </MenuItem>

          <MenuItem>
            <MenuContent>
              <MenuTitle>Unhas</MenuTitle>
              <MenuDescription>Esmalte</MenuDescription>
            </MenuContent>
          </MenuItem>

          <MenuItem>
            <MenuContent>
              <MenuTitle>Shine Original</MenuTitle>
              <MenuDescription>Conjuntos</MenuDescription>
            </MenuContent>
          </MenuItem>


        </MenuItems>
      </MenuBurgerContainer>
    </MenuBurgerWrapper>
  );
};

export default MenuBurger;
