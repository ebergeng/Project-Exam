import useVenueStore from "../storage/apiStore";
import { getVenues } from "../api/venues/getVenues";
import { useEffect } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import VenueGroup from "../components/venues/VenueGroup";

const HomePage = () => {
  const addVenues = useVenueStore((state) => state.addVenues);
  useEffect(() => {
    const limit = 100;
    let offset = 0;
    let hasMore = true;
    async function fetchAllVenues() {
      while (hasMore) {
        const data = await getVenues(limit, offset);
        if (data && data.length > 0) {
          addVenues(data);
          offset += data.length;
          hasMore = data.length === limit;
        } else {
          hasMore = false;
        }
      }
    }
    fetchAllVenues();
  }, [addVenues]);

  return (
    <>
      <SearchBar />
      <VenueGroup />
    </>
  );
};

export default HomePage;
