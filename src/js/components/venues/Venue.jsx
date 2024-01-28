import styled from "styled-components";
import ReviewStar from "../../../assets/icons/star.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-width: 200px;
  width: 100%;
  max-width: 250px;
  height: 300px;
  border-radius: 5px;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow);
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const ImageContainer = styled.div`
  height: 40%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 150%;
`;

const Body = styled.div`
  height: 40%;
`;

const RatingContainer = styled.div`
  display: flex;
  height: 20%;
  justify-content: start;
  align-items: center;
  padding: 5px;
  img {
    height: 20px;
  }
`;

const Title = styled.h3`
  margin: 10px;
  color: var(--color-text);
`;

const Description = styled.div`
  overflow: hidden;
  margin: 10px;
`;

const Venue = ({ venue }) => {
  const v = {
    id: venue.id,
    name: venue.name,
    media: venue.media[0],
    rating: venue.rating,
    description: venue.description,
  };

  const reviewStars = (num, id) => {
    let array = Array.from({ length: num }, (v, i) => i + 1);
    return (
      <div>
        {array.map((e, i) => (
          <img key={id + i} src={ReviewStar} alt="Filled star for rating" />
        ))}
      </div>
    );
  };

  return (
    <Container>
      <Link to={v.id}>
        <Wrapper>
          <ImageContainer>
            <Image src={v.media} alr={v.Title} />
          </ImageContainer>

          <Body>
            <Title>{v.name}</Title>
            <Description>{v.description.slice(0, 50)}</Description>
          </Body>
          <RatingContainer>{reviewStars(v.rating, v.id)}</RatingContainer>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default Venue;
