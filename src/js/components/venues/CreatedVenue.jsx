import styled from "styled-components";
import BookedVenueImg from "../pages/profilepage/BookedVenueImg";

const Container = styled.div`
  width: 100%;
  padding: 5px 25px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  border-radius: 10px;
  gap: 5px;
  justify-content: space-around;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-dm);
  margin-bottom: 5px;
  align-items: center;
  &:hover {
    background-color: var(--color-secondary-background-hover);
  }
  @media (max-width: 600px) {
    max-width: unset;
    grid-template-columns: auto;
  }
`;

const Info = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .head {
    text-decoration: none;
    color: var(--color-accent);
    font-size: 20px;
    text-decoration: none;
  }

  .data {
    color: var(--color-secondary);
  }
`;

const CreatedVenue = ({ venue }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateStringCreated = venue.created;
  const FormattedDateStringCreated = new Date(
    dateStringCreated,
  ).toLocaleDateString("en-GB", options);

  return (
    <Container>
      <Wrapper>
        <BookedVenueImg media={venue.media} />

        <Info>
          <div className="head">{venue.name}</div>
          <div className="data">
            {venue.location.continent} {venue.location.country}{" "}
            {venue.location.city}
          </div>
        </Info>

        <Info>
          <div className="head">Created</div>
          <div className="data">{FormattedDateStringCreated}</div>
        </Info>
        <Info>
          <div className="head">Price</div>
          <div className="data">${venue.price}</div>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default CreatedVenue;
