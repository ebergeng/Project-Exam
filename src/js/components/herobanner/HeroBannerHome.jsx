import { useEffect, useState } from "react";
import BannerImages2 from "./BannerImage2";
import useVenueStore from "../../storage/venueStore/venueStore";

const HeroBannerHome = () => {
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
    <>
      {uniqueArray.length < 6
        ? null
        : [...Array(numberOfElements)].map((element, index) => (
            <BannerImages2
              key={element + index.toString()}
              venue={uniqueArray}
            />
          ))}
    </>
  );
};

export default HeroBannerHome;
