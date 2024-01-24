import styled from "styled-components";
import SignUpModal from "../../modal/signupmodal/SignUpModal";
import Modal from "../../modal/Modal";
import useModalStateStore from "../../../storage/modalstate/useModalState";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const SignUpButton = () => {
  const { modalStateRegister, setModalStateRegister } = useModalStateStore();
  const openModal = () => setModalStateRegister(true);
  const closeModal = () => setModalStateRegister(false);

  return (
    <>
      <Button onClick={openModal}>Sign Up</Button>
      <Modal isOpen={modalStateRegister} onClose={closeModal}>
        <SignUpModal />
      </Modal>
    </>
  );
};

export default SignUpButton;
