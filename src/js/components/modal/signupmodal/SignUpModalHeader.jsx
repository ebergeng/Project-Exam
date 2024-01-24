import styled from "styled-components";

const HeaderText = styled.h2`
  color: white;
  text-align: center;
`;

const SignUpModalHeader = () => {
  return (
    <HeaderText>
      Customer <br />
      Sign Up
    </HeaderText>
  );
};

export default SignUpModalHeader;
