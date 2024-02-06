import styled from "styled-components";
import useProfileStore from "../../../storage/profileStore";
import { useNavigate } from "react-router";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const LogOutButton = () => {
  const clearProfile = useProfileStore((state) => state.clearProfile);
  const navigate = useNavigate();

  function handleLogOut() {
    clearProfile();
    navigate("/");
  }

  return <Button onClick={handleLogOut}>Log out</Button>;
};

export default LogOutButton;
