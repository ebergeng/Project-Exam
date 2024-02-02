import styled from "styled-components";
import useSearchFilterStore from "../../../storage/useSearchFilterStore";
import useVenueStore from "../../../storage/apiStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 95%;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  max-width: 500px;
  max-height: 40vh;
  position: absolute;
  background-color: #ffffff99;
  top: 105px;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  overflow: auto;
`;

const Ul = styled.ul`
  width: 100%;
  border-radius: 5px;
  padding: 0;
`;

const Li = styled.li`
  display: block;
  color: var(--color-foreground);
  font-size: 18px;
  padding: 10px;
  &:hover {
    background-color: white;
  }
`;

const SearchResult = () => {
  const filter = useSearchFilterStore((state) => state.filter);
  const venues = useVenueStore((state) => state.venues);
  const [filterdVenues, setFilterdVenues] = useState([]);

  const search = () => {
    const filteredArray = venues.filter((venue) => {
      const matchesFilters =
        (filter.wifi ? venue.meta.wifi === filter.wifi : true) &&
        (filter.parking ? venue.meta.parking === filter.parking : true) &&
        (filter.pets ? venue.meta.pets === filter.pets : true) &&
        (filter.breakfast ? venue.meta.breakfast === filter.breakfast : true) &&
        filter.guests <= venue.maxGuests &&
        (filter.where.length > 0
          ? venue.location.city
              .toLowerCase()
              .includes(filter.where.toLowerCase()) ||
            venue.location.country
              .toLowerCase()
              .includes(filter.where.toLowerCase()) ||
            venue.location.continent
              .toLowerCase()
              .includes(filter.where.toLowerCase()) ||
            venue.name.toLowerCase().includes(filter.where.toLowerCase())
          : true);

      const isDateRangeAvailable = !venue.bookings.some((booking) => {
        const bookingStart = new Date(booking.dateFrom);
        const bookingEnd = new Date(booking.dateTo);
        return filter.from < bookingEnd && filter.to > bookingStart;
      });

      return matchesFilters && isDateRangeAvailable;
    });

    const uniqueArray = filteredArray.filter(
      (obj, index, self) => index === self.findIndex((t) => t.id === obj.id),
    );

    console.log(uniqueArray);
    return uniqueArray;
  };

  useEffect(() => {
    setFilterdVenues(search());
    console.log("hey");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      {filter.where.length > 0 && (
        <Wrapper>
          <Ul>
            {filterdVenues.map((venue) => {
              return (
                <Link to={`/venue/${venue.id}`} key={`${venue.id}`}>
                  <Li>
                    {venue.location.city}, {venue.location.country},{" "}
                    {venue.name}
                  </Li>
                </Link>
              );
            })}
          </Ul>
        </Wrapper>
      )}
    </>
  );
};

export default SearchResult;
