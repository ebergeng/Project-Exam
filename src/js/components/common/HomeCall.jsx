import styled from "styled-components";
import HomeIcon from "../../ui/icons/home/HomeIcon";
import { useNavigate } from "react-router-dom";

const HomeButton = styled.button`
  display: none;
`;

const HomeBtnLabel = styled.label`
  width: 60px;
  height: 60px;
  padding: 0px;
  background-color: #52a49ab3;
  border-radius: 50%;
  position: fixed;
  bottom: 95px;
  right: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: padding 0.1s ease-out;
  box-sizing: unset;

  &:hover {
    cursor: pointer;
    background-color: #52a49a;
    padding: 2px;
  }
`;

const HomeCall = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <HomeButton id="homeBtn" onClick={handleClick} />
      <HomeBtnLabel htmlFor="homeBtn">
        <HomeIcon width="28" />
      </HomeBtnLabel>
    </>
  );
};

export default HomeCall;
