import styled from "styled-components";
import useModalStateStore from "../../../storage/modalstate/useModalState";

const Button = styled.button`
  background-color: transparent;
  color: #c4c4c4;
  border: none;
  font-weight: bold;
  font-size: ${(props) => (props.size === "large" ? "22px" : "14px")};
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`;

const SignUpButton = ({ size }) => {
  const { setModalStateRegister } = useModalStateStore();
  const openModal = () => setModalStateRegister(true);

  return (
    <>
      <Button size={size} onClick={openModal}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUpButton;
