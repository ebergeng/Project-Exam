import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled.span`
  text-decoration: none;
  color: #c4c4c4;
  font-weight: bold;
  font-size: ${(props) => (props.size === "large" ? "22px" : "14px")};
`;

const HomeButton = ({ size }) => {
  return (
    <NavLink to="/" exact="true" activeclassname="active">
      <LinkText size={size}>Home</LinkText>
    </NavLink>
  );
};

export default HomeButton;
