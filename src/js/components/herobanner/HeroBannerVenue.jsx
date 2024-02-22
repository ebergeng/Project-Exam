import { useEffect } from "react";
import { getVenue } from "../../api/venues/getVenue";
import styled from "styled-components";
import useSearchModalStore from "../../storage/modalstate/searchModalstate";
import Loader from "../common/Loader";
import useSingleVenueStore from "../../storage/venueStore/sigleVenueStore";
import useErrorStore from "../../storage/venueStore/errorStore";

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
  const setError = useErrorStore((state) => state.setError);
  const { venue, setSingleVenue, clearSingleVenue } = useSingleVenueStore(
    (state) => ({
      venue: state.singleVenue,
      setSingleVenue: state.setSingleVenue,
      clearSingleVenue: state.clearSingleVenue,
    }),
  );
  const setSearchStateOff = useSearchModalStore(
    (state) => state.setSearchStateOff,
  );

  useEffect(() => {
    async function fetchVenue() {
      const result = await getVenue(venueId);
      if (result.success) {
        setSingleVenue(result.data);
      } else {
        setError(result.error);
      }
    }
    fetchVenue();
    clearSingleVenue();
    setSearchStateOff();
  }, [venueId]);

  if (!venue.name) {
    return <Loader />;
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
