import styled from "styled-components";
import useManagerStateStore from "../../../storage/modalstate/useManagerState";

const HeaderText = styled.h2`
  color: white;
  text-align: center;
`;

const SignUpModalHeader = () => {
  const managerState = useManagerStateStore((state) => state.managerState);

  return (
    <HeaderText>
      {managerState === true ? "Manager" : "Customer"} <br />
      Sign Up
    </HeaderText>
  );
};

export default SignUpModalHeader;
