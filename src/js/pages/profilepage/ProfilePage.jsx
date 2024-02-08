import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import MyBookings from "./MyBookings";
import BookingHistory from "./BookingHistory";

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

const ProfilePage = () => {
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

export default ProfilePage;
