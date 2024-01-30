import styled from "styled-components";
import MinusIcon from "../../ui/icons/Guests/MinusIcon";
import PlussIcon from "../../ui/icons/Guests/PlussIcon";
import { useState } from "react";
import GuestIcon from "../../ui/icons/Guests/GuestIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 150px;
`;
const Operator = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GuestAmount = () => {
  const [guests, setGuests] = useState(1);

  return (
    <Container>
      <div>Guests</div>
      <Operator>
        <div onClick={() => setGuests(guests - 1)}>
          <MinusIcon />
        </div>
        {guests}
        <div onClick={() => setGuests(guests + 1)}>
          <PlussIcon />
        </div>
      </Operator>
      <GuestIcon />
    </Container>
  );
};

export default GuestAmount;
