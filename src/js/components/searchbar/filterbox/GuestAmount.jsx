import styled from "styled-components";
import GuestIcon from "../../../ui/icons/Guests/GuestIcon";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";
import PlussIcon from "../../../ui/icons/pluss/PlussIcon";
import MinusIcon from "../../../ui/icons/minus/MinusIcon";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 150px;
  background-color: var(--color-filterbox-dm);
  color: var(--color-text-dm);
  border-radius: 10px;
  padding: 5px;

  @media (max-width: 480px) {
    max-width: none;
  }
`;
const Operator = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GuestAmount = () => {
  const filter = useSearchFilterStore((state) => state.filter);
  const addGuest = useSearchFilterStore((state) => state.addGuest);
  const removeGuest = useSearchFilterStore((state) => state.removeGuest);

  return (
    <Container>
      <div>Guests</div>
      <Operator>
        <div onClick={() => removeGuest()}>
          <MinusIcon />
        </div>
        {filter.guests}
        <div onClick={() => addGuest()}>
          <PlussIcon />
        </div>
      </Operator>
      <GuestIcon color={["#E87B7B", "#52A49A"]} />
    </Container>
  );
};

export default GuestAmount;
