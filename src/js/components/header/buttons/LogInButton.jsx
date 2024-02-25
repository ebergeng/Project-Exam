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

const LoginButton = ({ size }) => {
  const { setModalStateLogin } = useModalStateStore();
  const openModal = () => setModalStateLogin(true);

  return (
    <>
      <Button size={size} onClick={openModal} activeclassname="active">
        Login
      </Button>
    </>
  );
};

export default LoginButton;
