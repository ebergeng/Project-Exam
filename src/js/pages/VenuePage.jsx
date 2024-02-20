import styled from "styled-components";
import VenueAction from "../components/pages/venuepage/VenueAction";
import VenueImage from "../components/pages/venuepage/VenueImage";
import BookedModal from "../components/modal/BookedModal";
import useBookingModalStore from "../storage/modalstate/bookingModalState";
import Loader from "../components/common/Loader";
import useSingleVenueStore from "../storage/venueStore/sigleVenueStore";

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
  const bookingModal = useBookingModalStore((state) => state.bookingModal);
  const setBookingModalOff = useBookingModalStore(
    (state) => state.setBookingModalOff,
  );
  const venue = useSingleVenueStore((state) => state.singleVenue);
  if (!venue.name) {
    return <Loader />;
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
      <BookedModal isOpen={bookingModal} onClose={setBookingModalOff} />
    </Container>
  );
};

export default VenuePage;
