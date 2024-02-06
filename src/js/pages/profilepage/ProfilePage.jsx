import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import MyBookings from "./MyBookings";
import BookingHistory from "./BookingHistory";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 5fr;
`;
const ProfileWrapper = styled.div``;

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
