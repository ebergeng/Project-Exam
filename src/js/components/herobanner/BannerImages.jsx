import { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "../../../assets/images/image1.jpeg";
import image2 from "../../../assets/images/image2.jpeg";
import image3 from "../../../assets/images/image3.jpeg";
import image4 from "../../../assets/images/image4.jpeg";
import image5 from "../../../assets/images/image5.jpeg";
import image6 from "../../../assets/images/image6.jpeg";
import image7 from "../../../assets/images/image7.jpeg";
import image8 from "../../../assets/images/image8.jpeg";
import image9 from "../../../assets/images/image9.jpeg";

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
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-size: cover;
`;

export default function BannerImages() {
  const [isFlipped, setIsFlipped] = useState(false);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

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
