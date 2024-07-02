'use client';

import styled from "styled-components";
import { colors } from "@/assets/color";
import { SearchIcon } from "@/assets/SearchIcon";
import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
  width: 378px;
  border-radius: 10px;
  padding: 10px 18px;
  background-color: ${colors.green};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  color: ${colors.black};
  border: none; 
  outline: none; 
  
  ::placeholder {
    color: ${colors.grey};
    opacity: 0.5; /* Opacidade do placeholder */
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 300px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function PrimaryInputSearchIcon(props: InputProps) {
  return (
    <InputContainer> 
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}

export default PrimaryInput;
