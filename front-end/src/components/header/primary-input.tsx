'use client'
import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "./search-icon";

export const Search = styled.input`
  width: 100%;
  max-width: 440px;
  border-radius: 10px;
  border: none;
  padding: 10px 16px;
  background-color: var(--grey);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: var(--black);

  @media (max-width: 768px) {
    padding: 8px 14px;

   

  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 10px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 390px;

  svg {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--rose1);
    border-radius: 10px;
    padding: 5px;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    svg {

    padding: 3px 7px 3px 7px;
    gap: 10px;
    border-radius: 10px;
    opacity: 0px;

    right: 5px;
      padding: 3px;
    width: 20px;
    height:20px;

    }
  }

  @media (max-width: 480px) {
    max-width: 100%;

    svg {
      right: 5px;
      padding: 3px; 
    }
  }
`;



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <Search {...props} />
      <SearchIcon />
    </InputContainer>
  );
}

export default PrimaryInputSearchIcon;
