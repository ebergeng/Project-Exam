import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  padding-top: 25px;
  background: linear-gradient(
    0deg,
    rgba(0, 26, 51, 1) 0%,
    rgba(0, 51, 102, 1) 100%
  );
  gap: 20px;
  @media (max-width: 800px) {
    height: 280px;
  }

  @media (max-width: 600px) {
    height: 240px;
  }
`;

const HeroBanner2 = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeroBanner2;
