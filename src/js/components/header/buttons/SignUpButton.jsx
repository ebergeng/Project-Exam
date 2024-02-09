import styled from "styled-components";
import useModalStateStore from "../../../storage/modalstate/useModalState";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
`;

const SignUpButton = () => {
  const { setModalStateRegister } = useModalStateStore();
  const openModal = () => setModalStateRegister(true);

  return (
    <>
      <Button onClick={openModal}>Sign Up</Button>
    </>
  );
};

export default SignUpButton;
