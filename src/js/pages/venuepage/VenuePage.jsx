import useVenueStore from "../../storage/apiStore";
import styled from "styled-components";
import VenueAction from "./VenueAction";

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  padding: 25px 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  max-width: 1000px;
  display: flex;
`;

const VenueWrapper = styled.div`
  width: 70%;
  height: 50vh;
  background-color: white;
`;

const VenuePage = () => {
  const venue = useVenueStore((state) => state.singleVenue);

  if (!venue.name) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Wrapper>
        <VenueWrapper></VenueWrapper>
        <VenueAction venue={venue} />
      </Wrapper>
    </Container>
  );
};

export default VenuePage;
