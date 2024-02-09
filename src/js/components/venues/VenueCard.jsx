import styled from "styled-components";
import { Link } from "react-router-dom";
import GuestIcon from "../../ui/icons/Guests/GuestIcon";
import WifiIcon from "../../ui/icons/wifi/WifiIcon";
import ParkingIcon from "../../ui/icons/parking/ParkingIcon";
import BreakfastIcon from "../../ui/icons/breakfast/BreakfastIcon";
import PetsIcon from "../../ui/icons/pets/PetsIcon";

const Container = styled.div`
  width: 300px;
  max-width: 300px;
  height: 320px;
  border-radius: 10px;
  background-color: var(--color-background-venue);
  box-shadow: var(--box-shadow-dm);
  overflow: hidden;

  &:hover {
    box-shadow: var(--box-shadow-hover-dm);
    background-color: var(--color-background-hover-venue);
  }
`;

const InfoWrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`;

const ImageContainer = styled.div`
  height: 70%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const InfoTop = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 18px;
  }

  h3,
  p {
    margin: 6px;
    text-decoration: none;
    color: var(--color-text-venue);
    display: block;
  }
  div {
    margin-top: 5px;
    padding-right: 5px;
    display: flex;
    gap: 5px;
    justify-content: center;
  }
`;

const InfoBottom = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Price = styled.div`
  text-decoration: none;
  color: var(--color-secondary);
  font-size: 20px;
  font-weight: bold;
`;

const Facilities = styled.div`
  display: flex;
  gap: 5px;
  li {
    display: block;
  }
`;

const Venue = ({ venue }) => {
  const v = {
    id: venue.id,
    media: venue.media,
    location: [venue.location.country, venue.location.city],
    meta: Object.keys(venue.meta).filter((key) => venue.meta[key]),
    guests: venue.maxGuests,
    price: venue.price,
    title: venue.name,
  };

  const getIcon = (name) => {
    switch (name) {
      case "wifi":
        return <WifiIcon color={"#003366"} width={"20"} height={"20"} />;
      case "parking":
        return <ParkingIcon color={"#003366"} width={"20"} height={"20"} />;
      case "breakfast":
        return <BreakfastIcon color={"#003366"} width={"20"} height={"20"} />;
      case "pets":
        return <PetsIcon color={"#003366"} width={"20"} height={"20"} />;
    }
  };

  return (
    <Link to={`/venue/${venue.id}`}>
      <Container>
        <ImageContainer>
          <img src={venue.media[0]} alt="" />
        </ImageContainer>
        <InfoWrapper>
          <InfoTop>
            <h3>
              {v.location[1]}, {v.location[0]}
            </h3>
            <div>
              <p>1-{v.guests}</p>
              <GuestIcon color={["#003366", "#52A49A"]} />
            </div>
          </InfoTop>
          <InfoBottom>
            <Price>$ {venue.price},-</Price>
            <Facilities>
              {v.meta.map((item) => (
                <li key={item}>
                  <div>{getIcon(item)}</div>
                </li>
              ))}
            </Facilities>
          </InfoBottom>
        </InfoWrapper>
      </Container>
    </Link>
  );
};

export default Venue;
