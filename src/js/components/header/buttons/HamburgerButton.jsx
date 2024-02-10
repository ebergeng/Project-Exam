import styled from "styled-components";
import useModalStateStore from "../../../storage/modalstate/useModalState";
import HamburgerIcon from "../../../ui/icons/HamburgerIcon/HamburgerIcon";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const HamburgerButton = () => {
  const { setModalStateMenu } = useModalStateStore();
  const openModal = () => setModalStateMenu(true);

  return (
    <Button onClick={openModal}>
      <HamburgerIcon />
    </Button>
  );
};

export default HamburgerButton;
