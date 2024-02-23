import styled from "styled-components";
import useErrorStore from "../../storage/venueStore/errorStore";
import DisplayMessage from "../common/DisplayMessage";

const Wrapper = styled.div`
  margin: 25px;
`;

const HerobannerError = () => {
  const error = useErrorStore((state) => state.error);

  return (
    <Wrapper>
      <DisplayMessage type={"alert"}>{error}</DisplayMessage>
    </Wrapper>
  );
};

export default HerobannerError;
