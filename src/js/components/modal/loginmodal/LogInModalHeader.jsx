import styled from "styled-components";

const HeaderText = styled.h2`
  color: white;
  text-align: center;
`;

const LoginModalHeader = () => {
  return (
    <HeaderText>
      HolyDaze <br />
      Log In
    </HeaderText>
  );
};

export default LoginModalHeader;
