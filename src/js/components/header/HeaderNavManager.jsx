import styled from "styled-components";
import LogOutButton from "./buttons/LogoutButton";

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

const HeaderNavManager = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <LogOutButton />
        </Li>
      </Ul>
    </Nav>
  );
};

export default HeaderNavManager;
