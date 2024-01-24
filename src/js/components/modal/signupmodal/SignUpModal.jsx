import styled from "styled-components";
import SignUpModalHeader from "./SignUpModalHeader";
import SignUpModalForm from "./SignUpModalForm";

const SignUpWrapper = styled.div`
  height: calc(100vh - 30px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUpModal = () => {
  return (
    <SignUpWrapper>
      <SignUpModalHeader />
      <SignUpModalForm />
    </SignUpWrapper>
  );
};

export default SignUpModal;
