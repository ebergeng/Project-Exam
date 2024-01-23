import styled from "styled-components";
import Modal from "../../modal/Modal";
import useModalStore from "../../../storage/modalstate/useModalStore";
import LogInModal from "../../modal/loginmodal/LoginModal";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const LoginButton = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const setIsOpen = useModalStore((state) => state.setIsOpen);

  function handlModal() {
    setIsOpen();
  }

  return (
    <>
      <Button onClick={handlModal}>Log In</Button>
      <Modal open={isOpen}>
        {" "}
        <LogInModal />{" "}
      </Modal>
    </>
  );
};

export default LoginButton;
