import styled from "styled-components";
import LoginButton from "./buttons/LogInButton";
import SignUpButton from "./buttons/SignUpButton";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 55px;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  display: block;
`;

const HeaderNav = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <LoginButton />
        </Li>
        <Li>
          <SignUpButton />
        </Li>
      </Ul>
    </Nav>
  );
};

export default HeaderNav;
