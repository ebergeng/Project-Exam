import useVenueStore from "../storage/apiStore";
import styled from "styled-components";
import VenueAction from "../components/pages/venuepage/VenueAction";
import VenueImage from "../components/pages/venuepage/VenueImage";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  gap: 15px;
  align-items: start;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const VenueBody = styled.div`
  width: 100%;
`;

const AbouteVenue = styled.div`
  width: 100%;
  padding: 0px 25px;

  h3 {
    color: var(--color-text);
    margin-bottom: 5px;
  }
  p {
    margin-top: 0;
    color: var(--color-text);
  }
`;

const VenuePage = () => {
  const venue = useVenueStore((state) => state.singleVenue);
  if (!venue.name) {
    return <div>Loading...</div>;
  }

  window.scrollTo({
    top: 0,
  });

  return (
    <Container>
      <Wrapper>
        <VenueBody>
          <VenueImage media={venue.media} />
          <AbouteVenue>
            <h3>Description</h3>
            <p>{venue.description}</p>
          </AbouteVenue>
        </VenueBody>

        <VenueAction venue={venue} />
      </Wrapper>
    </Container>
  );
};

export default VenuePage;
