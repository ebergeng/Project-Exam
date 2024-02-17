import styled from "styled-components";
import Collapse from "../../common/DropBox";
import { useEffect, useState } from "react";
import { getBooking } from "../../../api/venues/getBooking";
import BookedVenueManager from "../../venues/BookedVenueManager";

const Li = styled.li`
  display: block;
`;

const Ul = styled.ul`
  padding: 15px 0px;
`;

const UppcommingBookings = ({ bookings, token }) => {
  const [b, setB] = useState([]);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Sett klokkeslett til midnatt for konsistens i sammenligning

  useEffect(() => {
    function fetchBookings() {
      let temp = [];
      bookings.forEach(async (element) => {
        const response = await getBooking(element.id, token);
        const bookingDate = new Date(element.dateFrom);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (bookingDate >= today) {
          temp = [...temp, response];
          setB(temp);
        }
      });
    }
    fetchBookings();
  }, [bookings, token]);

  return (
    <Collapse contentName={"Uppcomming Bookings"} color={"#E87B7B"}>
      <Ul>
        {b.map((booking, index) => (
          <Li key={booking.id + index}>
            <BookedVenueManager booking={booking} />
          </Li>
        ))}
      </Ul>
    </Collapse>
  );
};

export default UppcommingBookings;
