import styled from "styled-components";
import { useState } from "react";
import Modal from "../../modal/Modal";
import LogInModal from "../../modal/loginmodal/LoginModal";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const LoginButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={openModal}>Log In</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LogInModal />
      </Modal>
    </>
  );
};

export default LoginButton;
