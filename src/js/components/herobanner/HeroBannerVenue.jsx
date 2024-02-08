import { useEffect } from "react";
import useVenueStore from "../../storage/apiStore";
import { getVenue } from "../../api/venues/getVenue";
import styled from "styled-components";
import useSearchModalStore from "../../storage/modalstate/searchModalstate";

const Wrapper = styled.div`
  margin: 25px;
`;

const NameHead = styled.div`
  margin-bottom: 10px;
  h1 {
    text-align: center;
    color: white;
    margin: 0;
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
      const data = await getVenue(venueId);
      if (data) {
        addVenue(data);
      } else {
        console.log("somthing wrong");
      }
    }
    fetchVenue();

    setSearchStateOff(); // sets searchModalState to false if its open
  }, [venueId]);

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
