import styled from "styled-components";
import SignUpModalHeader from "./SignUpModalHeader";

const SignUpWrapper = styled.div`
  height: calc(100vh - 30px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 800px;
`;

const SignUpModal = () => {
  return (
    <SignUpWrapper>
      <SignUpModalHeader />
    </SignUpWrapper>
  );
};

export default SignUpModal;
