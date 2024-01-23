import styled from "styled-components";
import useModalStore from "../../storage/modalstate/useModalStore";
import BackArrowIcon from "../icons/BackArrowIcon";

const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  border: none;
`;

const CloseButton = () => {
  const setIsOpen = useModalStore((state) => state.setIsOpen);
  return (
    <Button onClick={() => setIsOpen()}>
      <BackArrowIcon />
    </Button>
  );
};

export default CloseButton;
