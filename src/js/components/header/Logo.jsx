import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContent = styled.div`
  color: var(--color-accent);
  font-size: 28px;
  padding: 5px;
`;

const Logo = () => {
  return (
    <Link to={"/"}>
      <LogoContent>HolyDaze</LogoContent>
    </Link>
  );
};

export default Logo;
