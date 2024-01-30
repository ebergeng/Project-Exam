import styled from "styled-components";
import useVenueStore from "../../storage/apiStore";
import BannerImages2 from "./BannerImage2";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  padding-top: 25px;
  background: linear-gradient(
    0deg,
    rgba(0, 26, 51, 1) 0%,
    rgba(0, 51, 102, 1) 100%
  );
  gap: 20px;
  @media (max-width: 800px) {
    height: 280px;
  }

  @media (max-width: 600px) {
    height: 240px;
  }
`;

const HeroBanner2 = () => {
  const [numberOfElements, setNumberOfElements] = useState(6);
  const venues = useVenueStore((state) => state.venues);
  const filterdVenues = venues.filter((venue) => venue.media.length > 0);
  const uniqueArray = filterdVenues.filter(
    (obj, index, self) => index === self.findIndex((t) => t.id === obj.id),
  );

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newNumElements;

      switch (true) {
        case screenWidth < 500:
          newNumElements = 2;
          break;
        case screenWidth < 800:
          newNumElements = 3;

          break;
        case screenWidth < 1100:
          newNumElements = 4;

          break;
        case screenWidth < 1300:
          newNumElements = 5;

          break;
        case screenWidth < 1400:
          newNumElements = 6;

          break;
        case screenWidth > 1400:
          newNumElements = 6;
          break;
        default:
          break;
      }

      setNumberOfElements(newNumElements);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper>
      {uniqueArray.length < 6
        ? null
        : [...Array(numberOfElements)].map((element, index) => (
            <BannerImages2
              key={element + index.toString()}
              venue={uniqueArray}
            />
          ))}
    </Wrapper>
  );
};

export default HeroBanner2;
