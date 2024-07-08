import sliderimg1 from "../assets/Component 17.svg";
import sliderimg2 from "../assets/Component 18.svg";
import sliderimg3 from "../assets/Component 19.svg";
import sliderimg4 from "../assets/Component 20.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";


const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  background-color: #f0f0f0;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #000;
  background-color: rgba(255, 255, 255, 0.5);
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

interface ImageProps {
  visible: boolean;
}

const Image = styled.img<ImageProps>`
  object-fit: cover;
  border-radius: 10px;
  transition: opacity 1s ease-in-out;
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
`;

const images = [sliderimg1, sliderimg2, sliderimg3, sliderimg4];

export default function Slider1() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <SliderWrapper>
      <Container>
        <LeftArrow onClick={goToPrevious}>&lt;</LeftArrow>
        <RightArrow onClick={goToNext}>&gt;</RightArrow>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`img-${index}`} visible={index === currentImage} />
        ))}
      </Container>
    </SliderWrapper>
  );
}
