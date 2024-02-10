import styled from "styled-components";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";

const HeaderContainer = styled.header`
  background-color: var(--color-primary);
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  box-shadow: var(--box-shadow-dm);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNav />
    </HeaderContainer>
  );
};

export default Header;
