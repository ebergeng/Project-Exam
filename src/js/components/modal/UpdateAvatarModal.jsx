import styled from "styled-components";
import UpdateAvatarForm from "./updateAvatar/updateAvatarForm";
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
  width: 90%;
  max-width: 330px;
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

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
`;

const UpdateAvatarModal = ({ onClose, isOpen }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Button onClick={handleClose} type={"accent"}>
            <CloseIcon />
          </Button>
        </ModalHeader>

        <UpdateAvatarForm />
      </ModalContent>
    </ModalOverlay>
  );
};

export default UpdateAvatarModal;
