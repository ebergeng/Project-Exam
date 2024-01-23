import styled, { keyframes } from "styled-components";
import useModalStore from "../../storage/modalstate/useModalStore";
import ReactDom from "react-dom";
import CloseButton from "./CloseButton";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 999;
`;

const slideIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(100%);
    }
`;

const ModalContent = styled.div`
  background: var(--color-modal);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 350px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  animation: ${(props) => (props.open ? slideIn : slideOut)} 0.3s ease-out;

  @media (max-width: 480px) {
    left: 0;
    width: auto;
  }
`;

// eslint-disable-next-line react/prop-types
export default function Modal({ children }) {
  const isOpen = useModalStore((state) => state.isOpen);
  const setIsOpen = useModalStore((state) => state.setIsOpen);

  function handleClose() {
    setIsOpen();
  }

  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <ModalOverlay onClick={handleClose} />
      <ModalContent open={isOpen}>
        <CloseButton />
        {children}
      </ModalContent>
    </>,
    document.getElementById("modal"),
  );
}
