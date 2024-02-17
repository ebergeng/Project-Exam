import styled from "styled-components";
import BookedVenueImg from "../pages/profilepage/BookedVenueImg";

const Container = styled.div`
  width: 100%;
  padding: 5px 25px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-dm);
  margin-bottom: 5px;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .wrapper-left {
    z-index: 999;
    display: flex;
    justify-content: start;
    gap: 20px;
    padding: 5px;
    align-items: center;
    width: 100%;
    justify-content: start;
    @media (max-width: 1000px) {
      justify-content: start;
    }
  }

  .wrapper-right {
    display: flex;
    padding: 5px;
    align-items: center;
    height: 100%;
    width: 100%;
    table {
      width: 100%;
    }
    tr {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid black;
    }
    .head {
      text-decoration: none;
      color: var(--color-accent);
      font-size: 16px;
      text-decoration: none;
    }
    .data {
      color: var(--color-secondary);
      font-size: 14px;
    }
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

const BookedVenueManager = ({ booking }) => {
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
          <table>
            <tbody>
              <tr>
                <td className="head">Customer Name</td>
                <td className="data">{booking.customer.name}</td>
              </tr>
              <tr>
                <td className="head">Email</td>
                <td className="data">{booking.customer.email}</td>
              </tr>
              <tr>
                <td className="head">From</td>
                <td className="data">{formattedDateFrom}</td>
              </tr>
              <tr>
                <td className="head">To</td>
                <td className="data">{formattedDateTo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Wrapper>
    </Container>
  );
};

export default BookedVenueManager;
