import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  min-width: 120px;
  padding: 2px;
`;

const Wrapper = styled.div`
  background-color: red;
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 40%;
  width: 100%;
  background-color: blue;
`;

const Body = styled.div`
  height: 50%;
`;

const RatingContainer = styled.div`
  background-color: aquamarine;
  height: 10%;
`;

const Venue = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer />
        <Body></Body>
        <RatingContainer></RatingContainer>
      </Wrapper>
    </Container>
  );
};

export default Venue;
