import styled from "styled-components";
import LogOutButton from "../../header/buttons/LogoutButton";
import SignUpButton from "../../header/buttons/SignUpButton";
import ToggleDarkMode from "../../header/buttons/ToggleDarkMode";
import useProfileStore from "../../../storage/profileStore";
import ProfileButton from "../../header/buttons/ProfileButton";
import LoginButton from "../../header/buttons/LogInButton";
import HomeButton from "../../header/buttons/HomeButton";

const MobileMenuWrapper = styled.div`
  height: calc(100vh - 30px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 800px;
  gap: 35px;
`;

const Li = styled.li`
  display: inline-block;
  text-decoration: none;

  :hover {
    color: #ffffff;
  }
  .active {
    span {
      color: #ffffff;
      font-size: 26px;
    }
  }
`;

const MobileMenu = () => {
  const accessToken = useProfileStore((state) => state.profile.accessToken);
  return (
    <MobileMenuWrapper>
      {!accessToken ? (
        <>
          <Li>
            <LoginButton size={"large"} />
          </Li>

          <Li>
            {" "}
            <SignUpButton size={"large"} />
          </Li>
        </>
      ) : (
        <>
          <Li>
            <HomeButton size={"large"} />
          </Li>
          <Li>
            <ProfileButton size={"large"} />
          </Li>

          <Li>
            <LogOutButton size={"large"} />
          </Li>
        </>
      )}

      <ToggleDarkMode />
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
