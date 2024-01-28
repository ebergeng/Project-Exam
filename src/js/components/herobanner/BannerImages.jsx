import { useState, useEffect } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  perspective: 1000px;
`;

const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  transition: transform 1.2s;
  transform-style: preserve-3d;
  transform: ${({ isflipped }) =>
    isflipped === "true" ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-size: cover;
  background-position: center;
`;

export default function BannerImages({ images }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const [frontBgImg, setFrontBgImg] = useState(
    () => images[Math.floor(Math.random() * images.length)],
  );
  const [backBgImg, setBackBgImg] = useState(
    () => images[Math.floor(Math.random() * images.length)],
  );

  const handleFlip = () => {
    setIsFlipped(!isFlipped);

    if (!isFlipped) {
      setBackBgImg(images[Math.floor(Math.random() * images.length)]);
    } else {
      setFrontBgImg(images[Math.floor(Math.random() * images.length)]);
    }
  };

  useEffect(() => {
    const flipInterval = () => {
      handleFlip();
    };

    const interval = setInterval(
      flipInterval,
      Math.floor(Math.random() * (35000 - 5000)) + 5000,
    );

    return () => clearInterval(interval);
  }, [isFlipped]);

  return (
    <ImageContainer>
      <ContainerInner isflipped={isFlipped.toString()}>
        <Front style={{ backgroundImage: `url(${frontBgImg})` }} />
        <Back style={{ backgroundImage: `url(${backBgImg})` }}></Back>
      </ContainerInner>
    </ImageContainer>
  );
}
