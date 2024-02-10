import styled from "styled-components";
import HeaderNav from "../header/HeaderNav";

const Wrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0;
  }
`;

const ShortCuts = () => {
  return (
    <Wrapper>
      <h3>Shortcuts</h3>
      <HeaderNav />
    </Wrapper>
  );
};

export default ShortCuts;
