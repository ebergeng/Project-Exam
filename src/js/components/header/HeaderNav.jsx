import styled from "styled-components";
import LoginButton from "./buttons/LogInButton";
import SignUpButton from "./buttons/SignUpButton";
import useProfileStore from "../../storage/profileStore";
import LogOutButton from "./buttons/LogoutButton";
import ProfileButton from "./buttons/ProfileButton";
import HamburgerButton from "./buttons/HamburgerButton";
import { useEffect, useState } from "react";
import ToggleDarkMode from "./buttons/ToggleDarkMode";
import HomeButton from "./buttons/HomeButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
`;

const Ul = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
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
      font-size: 18px;
    }
  }
`;

const HeaderNav = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 650) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const accessToken = useProfileStore((state) => state.profile.accessToken);
  return (
    <Nav>
      <Ul>
        {!accessToken ? (
          <>
            {mobileView ? (
              <Li>
                <HamburgerButton />
              </Li>
            ) : (
              <>
                <Li>
                  <ToggleDarkMode />
                </Li>
                <Li>
                  <LoginButton key={"unik2"} />
                </Li>
                <Li>
                  <SignUpButton />
                </Li>
              </>
            )}
          </>
        ) : (
          <>
            {mobileView ? (
              <Li>
                <HamburgerButton />
              </Li>
            ) : (
              <>
                <Li>
                  <ToggleDarkMode />
                </Li>
                <Li>
                  <HomeButton />
                </Li>
                <Li>
                  <ProfileButton />
                </Li>
                <Li>
                  <LogOutButton />
                </Li>
              </>
            )}
          </>
        )}
      </Ul>
    </Nav>
  );
};

export default HeaderNav;
