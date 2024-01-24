import styled from "styled-components";
import { useState } from "react";
import SignUpModal from "../../modal/signupmodal/SignUpModal";
import Modal from "../../modal/Modal";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const SignUpButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={openModal}>Sign Up</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SignUpModal />
      </Modal>
    </>
  );
};

export default SignUpButton;
