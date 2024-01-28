import GetImages from "../api/getImages";
import GetTopRated from "../api/topRated";
import VenueGroup from "../components/venues/VenueGroup";
import useVenueStore from "../storage/apiStore";
import { getVenues } from "../api/venues/getVenues";
import { useEffect } from "react";

const HomePage = () => {
  GetImages();
  GetTopRated();

  const venues = useVenueStore((state) => state.venues);
  const addVenues = useVenueStore((state) => state.addVenues);

  useEffect(() => {
    const limit = 100;
    let offset = 0;
    let hasMore = true;
    console.log("hey");
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
      <VenueGroup />
      <button onClick={() => console.log(venues)}>see all venues</button>
    </>
  );
};

export default HomePage;
