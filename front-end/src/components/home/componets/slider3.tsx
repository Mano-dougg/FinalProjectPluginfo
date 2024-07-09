'use client'
import React, { useState } from "react";
import styled from "styled-components";
import Image from 'next/image';
import { Component17, Component18, Component19, Component20 } from "../assets/imgs";
import "../css.css"

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  aling-itens:center;
  height: auto;
  padding: 0;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto; 
  overflow: hidden;
  display: flex;
  align-items: center;

  img {
    display: flex;
    justify-content: center;
    object-fit: cover;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--grey);
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1;
  user-select: none;
  border-radius: 50%;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const Slide = styled.div`
  min-width: 100%;
  flex: 0 0 auto;


  .ajustimg img {
    width: 100vw; 
    max-width: 100%;
  }
`;

const Slider3 = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (slideIndex < 3) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <SliderWrapper>
      <Container>
        <LeftArrow onClick={handlePrevSlide}>{"<"}</LeftArrow>
        <div style={{ transform: `translateX(-${slideIndex * 100}%)`, display: 'flex', transition: 'transform 1s' }}>
          <Slide>
            <div className="ajustimg"> 
            <Component17 />
            </div>
            </Slide>
            <Slide>
            <div className="ajustimg"> 
            <Component18 />
            </div>
            </Slide>
            <Slide>
            <div className="ajustimg"> 
            <Component19 />
            </div>
            </Slide>

            <Slide>
            <div className="ajustimg"> 
            <Component20 />
            </div>
            </Slide>

        </div>
        <RightArrow onClick={handleNextSlide}>{">"}</RightArrow>
      </Container>
    </SliderWrapper>
  );
};

export default Slider3;
