import styled from "styled-components";
import Modal from "../../modal/Modal";
import LogInModal from "../../modal/loginmodal/LoginModal";
import useModalStateStore from "../../../storage/modalstate/useModalState";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const LoginButton = () => {
  const { modalStateLogin, setModalStateLogin } = useModalStateStore();
  const openModal = () => setModalStateLogin(true);
  const closeModal = () => setModalStateLogin(false);
  return (
    <>
      <Button onClick={openModal}>Log In</Button>
      <Modal isOpen={modalStateLogin} onClose={closeModal}>
        <LogInModal />
      </Modal>
    </>
  );
};

export default LoginButton;
