import styled from "styled-components";
import Venue from "./VenueCard";
import useVenueStore from "../../storage/apiStore";
import { useState } from "react";
import useSearchFilterStore from "../../storage/useSearchFilterStore";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const MoreButton = styled.button`
  margin: 5px;
  width: 100%;
  max-width: 1230px;
  color: var(--color-text-dm);
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-dm);
  border: none;
  height: 28px;
  border-radius: 5px;
  &:hover {
    background-color: var(--color-background-hover-dm);
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VenueGroupHeader = styled.div`
  height: 11vh;
  min-height: 120px;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: end;
  padding: 10px;

  .filter {
    color: var(--color-accent);
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: var(--color-secondary);
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

const VenueGroup = () => {
  //const { data, isLoading, isError } = useApi(GET_VENUES_URL)
  const venues = useVenueStore((state) => state.venues);
  const filterdVenues = useVenueStore((state) => state.searchFilterdVenues);
  const filterText = useSearchFilterStore((state) => state.filter.filterText);
  const [slice, setSlice] = useState(16);

  function addColumn() {
    setSlice(slice + 16);
  }

  console.log(filterText.length);
  return (
    <Container>
      <VenueGroupHeader>
        {filterText ? (
          <div className="filter">
            Filter: <p>{filterText ? filterText : null}</p>
          </div>
        ) : null}
      </VenueGroupHeader>
      <Wrapper>
        {filterdVenues.length > 0
          ? filterdVenues
              .map((venue) => <Venue key={venue.id} venue={venue} />)
              .slice(slice - slice, slice)
          : venues
              .map((venue) => <Venue key={venue.id} venue={venue} />)
              .slice(slice - slice, slice)}
        <MoreButton onClick={addColumn}>See More</MoreButton>
      </Wrapper>
    </Container>
  );
};

export default VenueGroup;
