import styled from "styled-components";
import useProfileStore from "../../../storage/profileStore";
import { useNavigate } from "react-router";

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

const LogOutButton = ({ size }) => {
  const clearProfile = useProfileStore((state) => state.clearProfile);
  const navigate = useNavigate();

  function handleLogOut() {
    clearProfile();
    navigate("/");
  }

  return (
    <Button size={size} onClick={handleLogOut}>
      Log out
    </Button>
  );
};

export default LogOutButton;
