import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  perspective: 1000px;
  @media (max-width: 800px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 600px) {
    width: 140px;
    height: 140px;
  }
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
  border-radius: 10px;
`;

const Back = styled.div`
  border-radius: 10px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background-size: cover;
  background-position: center;
`;

const Filter = styled.div`
  background-color: rgba(0, 0, 0, 0.301);
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardHeader = styled.div`
  padding: 10px;
  text-align: start;
  color: white;
  font-size: 22px;
  height: 30px;
  display: grid;
`;

const CardFooter = styled.div`
  width: 100%;
  position: absolute;
  padding: 10px;
  color: white;
  text-align: end;
  font-size: 20px;
  height: 30px;
  display: grid;
  bottom: 30px;
  right: 0;
`;

const UnderLineFooter = styled.div`
  width: 80%;
  background-color: white;
  height: 2px;
  position: absolute;
  right: 5px;
  bottom: -5px;
`;
const UnderLineHeader = styled.div`
  width: 80%;
  background-color: white;
  height: 2px;
`;

function BannerImages2({ venue }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const [frontVenue, setFrontVenue] = useState(
    () => venue[Math.floor(Math.random() * venue.length)],
  );
  const [backVenue, setBackVenue] = useState(
    () => venue[Math.floor(Math.random() * venue.length)],
  );

  const handleFlip = () => {
    setIsFlipped(!isFlipped);

    if (!isFlipped) {
      setBackVenue(venue[Math.floor(Math.random() * venue.length)]);
    } else {
      setFrontVenue(venue[Math.floor(Math.random() * venue.length)]);
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
        <Front style={{ backgroundImage: `url(${frontVenue.media[0]})` }}>
          <Link to={`/${frontVenue.id}`} key={`${frontVenue.id}`}>
            <Filter>
              <CardHeader>
                {frontVenue.name}
                <UnderLineHeader />
              </CardHeader>

              <CardFooter>
                {frontVenue.location.city}
                <br />
                <UnderLineFooter /> {frontVenue.location.continent}
              </CardFooter>
            </Filter>
          </Link>
        </Front>
        <Back style={{ backgroundImage: `url(${backVenue.media[0]})` }}>
          <Link to={`/${backVenue.id}`} key={`${backVenue.id}`}>
            <Filter>
              <CardHeader>
                {backVenue.name}
                <UnderLineHeader />
              </CardHeader>
              <CardFooter>
                {backVenue.location.city} <br /> <UnderLineFooter />
                {backVenue.location.continent}
              </CardFooter>
            </Filter>
          </Link>
        </Back>
      </ContainerInner>
    </ImageContainer>
  );
}

export default BannerImages2;