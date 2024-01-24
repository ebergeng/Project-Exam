import { useState, useEffect } from "react";
import styled from "styled-components";
import BannerImages from "./BannerImages";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--color-primary);
`;

const HeroBannerContainer = styled.div`
  display: grid;

  grid-template-columns: ${({ numcolumns }) => `repeat(${numcolumns}, 1fr)`};
  justify-content: center;
  align-items: baseline;
  align-content: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const HeroBanner = () => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [numElements, setNumElements] = useState(12);
  const [numColumns, setNumColumns] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newNumElements = 12;
      let newNumColumns = 6;

      switch (true) {
        case screenWidth < 600:
          newNumElements = 6;
          newNumColumns = 3;
          break;
        case screenWidth < 800:
          newNumElements = 8;
          newNumColumns = 4;
          break;
        case screenWidth < 1000:
          newNumElements = 10;
          newNumColumns = 5;
          break;
        case screenWidth < 1200:
          newNumElements = 12;
          newNumColumns = 6;
          break;
        case screenWidth < 1400:
          newNumElements = 16;
          newNumColumns = 8;
          break;
        case screenWidth > 1400:
          newNumElements = 18;
          newNumColumns = 9;
          break;
        default:
          break;
      }

      setNumElements(newNumElements);
      setNumColumns(newNumColumns);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const flipInterval = () => {
      setIsFlipping(true);
    };

    const delay = setTimeout(flipInterval, 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <Wrapper>
      <HeroBannerContainer numcolumns={numColumns}>
        {[...Array(numElements)].map((_, index) => (
          <BannerImages
            key={index}
            shouldFlip={isFlipping && index % 2 === 0}
          />
        ))}
      </HeroBannerContainer>
    </Wrapper>
  );
};

export default HeroBanner;
