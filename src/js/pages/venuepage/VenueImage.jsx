import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FocusImg = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.media})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  display: grid;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: var(--box-shadow-dm);

  @media (max-width: 500px) {
    height: 300px;
  }

  @media (max-width: 350px) {
    height: 250px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: inherit;
    background-size: contain;
    background-position: center;
    background-repeat: repeat;
    filter: blur(10px);
    z-index: -1;
  }
`;

const VenueImage = ({ media }) => {
  return (
    <Container>
      <FocusImg media={media[0]} />
    </Container>
  );
};

export default VenueImage;
