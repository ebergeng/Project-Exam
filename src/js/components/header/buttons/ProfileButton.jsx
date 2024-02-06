import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const ProfileButton = () => {
  return (
    <Link to={"/profile"}>
      <Button>Profile</Button>
    </Link>
  );
};

export default ProfileButton;
