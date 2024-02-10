import { Link } from "react-router-dom";
import styled from "styled-components";
import BookedVenueImg from "./BookedVenueImg";

const Container = styled.div`
  width: 100%;
  padding: 5px 25px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: max-content;
  border-radius: 10px;
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

  .wrapper-left {
    z-index: 999;
    display: flex;
    justify-content: start;
    gap: 20px;
    padding: 5px;
    align-items: center;
  }

  .wrapper-right {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
    height: 100%;
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

const BookedVenue = ({ booking }) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateStringFrom = booking.dateFrom;
  const dateStringTo = booking.dateTo;
  const formattedDateFrom = new Date(dateStringFrom).toLocaleDateString(
    "en-GB",
    options,
  );
  const formattedDateTo = new Date(dateStringTo).toLocaleDateString(
    "en-GB",
    options,
  );

  return (
    <Container>
      <Link to={`/venue/${booking.venue.id}`}>
        <Wrapper>
          <div className="wrapper-left">
            <BookedVenueImg media={booking.venue.media} />

            <Info>
              <div className="head">{booking.venue.name}</div>
              <div className="data">
                {booking.venue.location.continent}{" "}
                {booking.venue.location.country} {booking.venue.location.city}
              </div>
            </Info>
          </div>
          <div className="wrapper-right">
            <Info>
              <div className="head">From</div>
              <div className="data">{formattedDateFrom}</div>
            </Info>
            <Info>
              <div className="head">To</div>
              <div className="data">{formattedDateTo}</div>
            </Info>
            <Info>
              <div className="head">Price</div>
              <div className="data">${booking.venue.price}</div>
            </Info>
          </div>
        </Wrapper>
      </Link>
    </Container>
  );
};

export default BookedVenue;
