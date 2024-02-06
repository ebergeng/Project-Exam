import styled from "styled-components";
import LoginButton from "./buttons/LogInButton";
import SignUpButton from "./buttons/SignUpButton";
import useProfileStore from "../../storage/profileStore";
import LogOutButton from "./buttons/LogoutButton";
import ProfileButton from "./buttons/ProfileButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
`;

const Ul = styled.ul`
  display: flex;
  gap: 30px;
`;

const Li = styled.li`
  display: block;
`;

const HeaderNav = () => {
  const accessToken = useProfileStore((state) => state.profile.accessToken);
  return (
    <Nav>
      <Ul>
        {!accessToken ? (
          <>
            <Li>
              <LoginButton />
            </Li>
            <Li>
              <SignUpButton />
            </Li>
          </>
        ) : (
          <>
            <Li>
              <ProfileButton />
            </Li>
            <Li>
              <LogOutButton />
            </Li>
          </>
        )}
      </Ul>
    </Nav>
  );
};

export default HeaderNav;
