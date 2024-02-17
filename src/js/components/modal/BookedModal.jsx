import styled from "styled-components";
import useBookingModalStore from "../../storage/modalstate/bookingModalState";
import PrimeryButton from "../common/CtaButton";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 330px;
  height: 80vh;
  max-height: 330px;
  background-color: var(--color-background);
  border-radius: 10px;
  box-shadow: var(--box-shadow-dm);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px;

  h1 {
    color: var(--color-secondary);
    text-align: center;
  }

  h2 {
    text-align: center;
    color: var(--color-text);
  }

  .date {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 15px;
    color: var(--color-text);
  }
`;

const BookedModal = ({ onClose, isOpen }) => {
  const venue = useBookingModalStore((state) => state.venue);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateStringFrom = venue.dateFrom;
  const dateStringTo = venue.dateTo;
  const formattedDateFrom = new Date(dateStringFrom).toLocaleDateString(
    "en-GB",
    options,
  );
  const formattedDateTo = new Date(dateStringTo).toLocaleDateString(
    "en-GB",
    options,
  );
  console.log(venue);

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>{venue.venueName}</h2>
        <h1>Booking Success!</h1>
        <div className="date">
          <div>From: {formattedDateFrom}</div>
          <div>To: {formattedDateTo}</div>
        </div>
        <PrimeryButton onClick={handleClose} type={"accent"}>
          Back
        </PrimeryButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default BookedModal;
