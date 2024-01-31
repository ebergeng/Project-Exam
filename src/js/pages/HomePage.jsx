import GetImages from "../api/getImages";
import GetTopRated from "../api/topRated";
import useVenueStore from "../storage/apiStore";
import { getVenues } from "../api/venues/getVenues";
import { useEffect } from "react";
import WifiIcon from "../ui/icons/wifi/WifiIcon";
import SearchBar from "../components/searchbar/SearchBar";

const HomePage = () => {
  GetImages();
  GetTopRated();

  const venues = useVenueStore((state) => state.venues);
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

      <button onClick={() => console.log(venues)}>see all venues</button>
      <WifiIcon />
    </>
  );
};

export default HomePage;
