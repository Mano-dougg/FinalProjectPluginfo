'use client'
import useLocalStorage from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--rose1);
    color: white;
    position: absolute;
    top: -10px;
    right: -10px;
`;

const Container = styled.div`
    position: relative;
    display: inline-block;
    cursor:pointer;
    @media screen and (max-width: 768px) {
    display:none;
}
`;

export function CartControll() {
  /*  const { } = useLocalStorage<any[]>('cart-items');*/
  /*{Array.isArray(value) && value.length > 0 && (
                <CartCount>{value.length}
                </CartCount>
            )}*/

    return (
        <Container>
            <CartIcon />            
        </Container>
    );
}

export default CartControll;
