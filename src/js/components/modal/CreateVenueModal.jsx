import styled from "styled-components";
import CreateVenueForm from "./createVenueContent/CreateVenueForm";
import useCreateVenueStore from "../../storage/modalstate/createVenueModalState";
import CloseIcon from "../../ui/icons/close/CloseIcon";

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
  position: relative;
  width: 95%;
  max-width: 700px;
  max-height: 80vh;
  background-color: var(--color-background);
  border-radius: 10px;
  box-shadow: var(--box-shadow-dm);
  padding: 5px;
  overflow-x: auto;

  h1 {
    color: var(--color-secondary);
    text-align: center;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CreateVenueModal = ({ onClose, isOpen }) => {
  const clearVenue = useCreateVenueStore((state) => state.clearUpdateVenue);
  const venue = useCreateVenueStore((state) => state.updateVenue);

  const handleClose = () => {
    clearVenue();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {venue ? <h1>Update Venue</h1> : <h1>Create Venue</h1>}
        <CreateVenueForm />
        <Button onClick={handleClose} type={"accent"}>
          <CloseIcon />
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreateVenueModal;
