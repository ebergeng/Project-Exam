import styled from "styled-components";

const Wrapper = styled.div``;

const NameHead = styled.div`
  margin: 25px;
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 0;
    font-size: 2rem;
  }
`;

const HeroBannerManager = () => {
  return (
    <Wrapper>
      <NameHead>
        <h1>Manager</h1>
      </NameHead>
    </Wrapper>
  );
};

export default HeroBannerManager;
