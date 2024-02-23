import { getVenues } from "../api/venues/getVenues";
import { useEffect, useState } from "react";
import SearchBar from "../components/searchbar/SearchBar";
import VenueGroup from "../components/venues/VenueGroup";
import useVenueStore from "../storage/venueStore/venueStore";
import useErrorStore from "../storage/venueStore/errorStore";
import Loader from "../components/common/Loader";

const HomePage = () => {
  const addVenues = useVenueStore((state) => state.addVenues);
  const setError = useErrorStore((state) => state.setError);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const limit = 100;
    let offset = 0;
    let hasMore = true;
    setLoading(true);
    async function fetchAllVenues() {
      while (hasMore) {
        const data = await getVenues(limit, offset);

        if (data.error) {
          setError(data.error);
        }

        if (data && data.length > 0) {
          addVenues(data);
          offset += data.length;
          hasMore = data.length === limit;
        } else {
          hasMore = false;
        }
      }
      setLoading(false);
    }
    fetchAllVenues();
  }, [addVenues]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <SearchBar />
      <VenueGroup />
    </>
  );
};

export default HomePage;
