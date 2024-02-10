import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
  box-shadow: 0px 2px 4px #080808b7;
  margin-top: 25px;

  background: linear-gradient(
    0deg,
    rgba(0, 26, 51, 1) 0%,
    rgba(0, 51, 102, 1) 100%
  );
  gap: 20px;
`;

const HeroBanner2 = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeroBanner2;
