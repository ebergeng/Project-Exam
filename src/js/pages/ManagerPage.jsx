import styled from "styled-components";
import ProfileCard from "../components/pages/profilepage/ProfileCard";
import BookingHistory from "../components/pages/profilepage/BookingHistory";
import MyBookings from "../components/pages/profilepage/MyBookings";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 25px;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`;

const ProfileWrapper = styled.div`
  max-height: 250px;
`;

const BookingWrapper = styled.div``;

const ManagerPage = () => {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileCard />
      </ProfileWrapper>

      <BookingWrapper>
        <MyBookings />
        <BookingHistory />
      </BookingWrapper>
    </Container>
  );
};

export default ManagerPage;
