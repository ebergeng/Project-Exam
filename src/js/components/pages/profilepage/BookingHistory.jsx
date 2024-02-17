import { useEffect, useState } from "react";
import useProfileStore from "../../../storage/profileStore";
import BookedVenue from "../../venues/BookedVenue";
import styled from "styled-components";
import { getBookings } from "../../../api/venues/getBookings";
import Collapse from "../../common/DropBox";

const Li = styled.li`
  display: block;
`;

const Ul = styled.ul`
  padding: 15px 0px;
`;

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const name = useProfileStore((state) => state.profile.name);
  const token = useProfileStore((state) => state.profile.accessToken);

  useEffect(() => {
    async function handleBookings() {
      const data = await getBookings(name, token);
      if (data) {
        const filterdBookings = data.filter((b) => {
          const bookingDate = new Date(b.dateFrom);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return bookingDate <= today;
        });
        setBookings(filterdBookings);
      }
    }
    handleBookings();
  }, []);

  return (
    <Collapse contentName={"Booking History"} color={"#E87B7B"}>
      <Ul>
        {bookings.map((booking, index) => (
          <Li key={booking.venue.id + index}>
            <BookedVenue booking={booking} />{" "}
          </Li>
        ))}
      </Ul>
    </Collapse>
  );
};

export default BookingHistory;
