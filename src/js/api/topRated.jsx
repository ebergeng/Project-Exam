import { useState, useEffect } from "react";
import useVenueStore from "../storage/apiStore";
import { GET_VENUES_URL } from "./constants";

export default function GetTopRated() {
  const { setTopRated } = useVenueStore();
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetch(
          `${GET_VENUES_URL}?sort=rating&limit=50`,
        );
        const json = await fetchedData.json();
        setData(json);
        setTopRated(json);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    };

    getData();
  }, [setTopRated]);

  return { data, isError };
}
