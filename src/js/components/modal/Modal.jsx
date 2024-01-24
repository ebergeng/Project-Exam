import styled, { keyframes } from "styled-components";
import BackArrowIcon from "../icons/BackArrowIcon";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 1000;
`;

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`;

// eslint-disable-next-line no-unused-vars
const ModalContent = styled(({ ...divProps }) => <div {...divProps} />)`
  background: var(--color-modal);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 400px;

  position: fixed;
  right: 0;
  top: 0;
  animation: ${slideIn} 0.3s ease-out forwards;

  @media (max-width: 480px) {
    left: 0;
    width: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
`;

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <BackArrowIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
