import styled from "styled-components";
import LoginModalHeader from "./LogInModalHeader";
import LogInModalForm from "./LoginModalForm";

const LogInWrapper = styled.div`
  height: calc(100vh - 30px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 800px;
`;

const LogInModal = () => {
  return (
    <LogInWrapper>
      <LoginModalHeader />
      <LogInModalForm />
    </LogInWrapper>
  );
};

export default LogInModal;
