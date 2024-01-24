import styled from "styled-components";
import BackArrow from "../icons/arrow-right-icon.svg";

const BackArrowContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: block;
  fill: #cecece;
  border: 2px solid #cecece;
  border-radius: 5px;
  padding: 3px;

  &:hover {
    fill: white;
    border: 2px solid white;
  }
`;

const Img = styled.img`
  height: 25px;
  width: 25px;
`;

const BackArrowIcon = () => {
  return (
    <BackArrowContainer>
      <Img src={BackArrow} alt="" />
    </BackArrowContainer>
  );
};

export default BackArrowIcon;
