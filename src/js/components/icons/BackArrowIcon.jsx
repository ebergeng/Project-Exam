import styled from "styled-components";
import BackArrow from "../icons/arrow-right-icon.svg";

const BackArrowContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  fill: #cecece;
  border: 2px solid #cecece;
  border-radius: 5px;

  .icon {
    height: 35px;
    width: 35px;
    padding: 5px;
    transform: translate(0, 2px);
  }

  &:hover {
    fill: white;
    border: 2px solid white;
  }
`;

const BackArrowIcon = () => {
  return (
    <BackArrowContainer>
      <BackArrow className="icon" />
    </BackArrowContainer>
  );
};

export default BackArrowIcon;
