import { useEffect } from "react";
import useVenueStore from "../../storage/apiStore";
import { GetVenue } from "../../api/venues/GetVenue";
import styled from "styled-components";
import useSearchModalStore from "../../storage/modalstate/searchModalstate";

const Wrapper = styled.div``;

const NameHead = styled.div`
  margin-bottom: 10px;
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 0;
    font-size: 2rem;
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  div {
    color: white;
    font-size: 1.1rem;
  }
`;
const HeroBannerVenue = ({ venueId }) => {
  const venue = useVenueStore((state) => state.singleVenue);
  const addVenue = useVenueStore((state) => state.setSingleVenue);
  const setSearchStateOff = useSearchModalStore(
    (state) => state.setSearchStateOff,
  );

  useEffect(() => {
    async function fetchVenue() {
      const data = await GetVenue(venueId);
      if (data) {
        addVenue(data);
      } else {
        console.log("somthing wrong");
      }
      console.log(venue);
    }
    fetchVenue();

    setSearchStateOff(); // sets searchModalState to false if its open
  }, [addVenue, setSearchStateOff, venue, venueId]);

  if (!venue.name) {
    return <div>Loading....</div>;
  }

  return (
    <Wrapper>
      <NameHead>
        <h1>{venue.name}</h1>
      </NameHead>
      <Location>
        <div>{venue.location.continent}</div>
        <div>{venue.location.country}</div>
        <div>{venue.location.city}</div>
      </Location>
    </Wrapper>
  );
};

export default HeroBannerVenue;
