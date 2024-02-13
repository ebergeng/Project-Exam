import styled from "styled-components";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import useProfileStore from "../../storage/profileStore";
import HeaderNavManager from "./HeaderNavManager";

const HeaderContainer = styled.header`
  background-color: var(--color-primary);
  max-height: 55px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  box-shadow: var(--box-shadow-dm);
`;

const Header = () => {
  const profile = useProfileStore((state) => state.profile);

  return (
    <HeaderContainer>
      <Logo />
      {profile.venueManager ? <HeaderNavManager /> : <HeaderNav />}
    </HeaderContainer>
  );
};

export default Header;
