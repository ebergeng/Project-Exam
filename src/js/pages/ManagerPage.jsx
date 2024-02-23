import styled from "styled-components";
import ProfileCard from "../components/pages/profilepage/ProfileCard";
import MyVenues from "../components/pages/ManagerPage.jsx/MyVenues";
import CreateVenueModal from "../components/modal/CreateVenueModal";
import CreateVenueButton from "../components/pages/ManagerPage.jsx/CreateVenueButton";
import useCreateVenueStore from "../storage/modalstate/createVenueModalState";
import useProfileStore from "../storage/profileStore";
import { useEffect, useState } from "react";
import { getProfileVenues } from "../api/profile/getProfileVenues";
import PastBookings from "../components/pages/ManagerPage.jsx/PastBookings";
import UppcommingBookings from "../components/pages/ManagerPage.jsx/UppcommingBookings";
import UpdateAvatarModal from "../components/modal/UpdateAvatarModal";
import useUpdateAvaterModalState from "../storage/modalstate/UpdateAvaterModalState";
import useErrorStore from "../storage/venueStore/errorStore";

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
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BookingWrapper = styled.div``;

const ManagerPage = () => {
  const creatVenueModal = useCreateVenueStore(
    (state) => state.createVenueModal,
  );
  const closeVenueModal = useCreateVenueStore(
    (state) => state.setCreateVenueModalOff,
  );

  const updateAvatarModal = useUpdateAvaterModalState(
    (state) => state.updateAvatarModal,
  );
  const setUpdateAvatarModalOff = useUpdateAvaterModalState(
    (state) => state.setUpdateAvatarModalOff,
  );

  const reRender = useProfileStore((state) => state.changeTracker);
  const setVenues = useProfileStore((state) => state.setProfileVenues);
  const setError = useErrorStore((state) => state.setError);
  const name = useProfileStore((state) => state.profile.name);
  const token = useProfileStore((state) => state.profile.accessToken);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function handleBookings() {
      const data = await getProfileVenues(name, token);

      if (data.error) {
        setError(data.error);
      } else {
        setVenues(data);
        let tempBookings = [];
        data.forEach((venue) => {
          if (venue.bookings.length > 0) {
            venue.bookings.map((booking) => {
              tempBookings = [...tempBookings, booking];
            });
          }
        });
        setBookings(tempBookings);
      }
    }

    handleBookings();
  }, [reRender]);

  return (
    <Container>
      <ProfileWrapper>
        <ProfileCard />
        <CreateVenueButton />
      </ProfileWrapper>

      <BookingWrapper>
        <MyVenues />
        <PastBookings bookings={bookings} token={token} />
        <UppcommingBookings bookings={bookings} token={token} />
      </BookingWrapper>
      <CreateVenueModal isOpen={creatVenueModal} onClose={closeVenueModal} />
      <UpdateAvatarModal
        isOpen={updateAvatarModal}
        onClose={setUpdateAvatarModalOff}
      />
    </Container>
  );
};

export default ManagerPage;
