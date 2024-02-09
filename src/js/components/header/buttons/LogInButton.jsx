import styled from "styled-components";
import useModalStateStore from "../../../storage/modalstate/useModalState";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const LoginButton = () => {
  const { setModalStateLogin } = useModalStateStore();
  const openModal = () => setModalStateLogin(true);

  return (
    <>
      <Button onClick={openModal}>Log In</Button>
    </>
  );
};

export default LoginButton;
