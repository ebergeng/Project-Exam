import styled from "styled-components";
import Venue from "./Venue";
import useVenueStore from "../../storage/apiStore";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MoreButton = styled.button`
  margin: 5px;
  width: 120px;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow);
  border: none;
  height: 28px;
  border-radius: 5px;
  &:hover {
    background-color: var(--color-background-hover);
    cursor: pointer;
  }
`;

const VenueGroup = () => {
  //const { data, isLoading, isError } = useApi(GET_VENUES_URL)
  const topRated = useVenueStore((state) => state.topRated);
  const [slice, setSlice] = useState(3);

  function addColumn() {
    setSlice(slice + 5);
  }

  return (
    <Container>
      <h2>Top Rated</h2>

      <Wrapper>
        {topRated.length > 1
          ? topRated
              .map((venue) => <Venue key={venue.id} venue={venue} />)
              .slice(slice - slice, slice)
          : null}
      </Wrapper>
      <MoreButton onClick={addColumn}>See More</MoreButton>
    </Container>
  );
};

export default VenueGroup;
