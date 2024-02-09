import styled, { keyframes } from "styled-components";
import BackArrowIcon from "../icons/BackArrowIcon";
import useModalStateStore from "../../storage/modalstate/useModalState";
import { useEffect } from "react";
import LogInModal from "./loginmodal/LoginModal";
import SignUpModal from "./signupmodal/SignUpModal";

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
        transform: translateX(0%);
    }
    to {
        transform: translateX(100%);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
`;

// eslint-disable-next-line no-unused-vars
const ModalContent = styled.div`
  background: var(--color-modal);
  backdrop-filter: blur(5px);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  height: 100%;
  width: 400px;
  text-align: center;

  position: fixed;
  right: 0;
  top: 0;
  animation: ${(props) => (props.isclosing === "true" ? slideIn : slideOut)}
    0.3s ease-out;

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
const Modal = () => {
  const isClosing = useModalStateStore((state) => state.isClosing);
  const setIsClosing = useModalStateStore((state) => state.setIsClosing);
  const loginIsOpen = useModalStateStore((state) => state.modalStateLogin);
  const registerIsOpen = useModalStateStore(
    (state) => state.modalStateRegister,
  );
  const { setModalStateRegister, setModalStateLogin } = useModalStateStore();
  const closeModalLogin = () => setModalStateLogin(false);
  const closeModalRegister = () => setModalStateRegister(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModalLogin();
      closeModalRegister();
    }, 250);
  };

  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        setIsClosing(false);
        closeModalLogin();
        closeModalRegister();
      }, 250);
    }
  });

  if (!loginIsOpen && !registerIsOpen) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        isclosing={isClosing.toString()}
      >
        <CloseButton onClick={handleClose}>
          <BackArrowIcon />
        </CloseButton>
        {loginIsOpen ? (
          <LogInModal />
        ) : null || registerIsOpen ? (
          <SignUpModal />
        ) : null}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
