import styled from "styled-components";

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

// eslint-disable-next-line no-unused-vars
const ModalContent = styled(({ ...divProps }) => <div {...divProps} />)`
  height: fit-content;
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 40%;
`;

const SearchBarModal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default SearchBarModal;
