import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkText = styled.span`
  text-decoration: none;
  color: #c4c4c4;
  font-weight: bold;
  font-size: ${(props) => (props.size === "large" ? "22px" : "14px")};
`;

const ProfileButton = ({ size }) => {
  return (
    <NavLink to="/profile" exact="true" activeclassname="active">
      <LinkText size={size}>Profile</LinkText>
    </NavLink>
  );
};

export default ProfileButton;
