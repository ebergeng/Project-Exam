import { useEffect } from "react";
import useVenueStore from "../storage/apiStore";

export default function GetImages() {
  const { venues, setMediaUrls } = useVenueStore();

  useEffect(() => {
    const mediaUrls = Array.from(
      new Set(
        venues
          .flatMap((venues) => venues.media)
          .filter((mediaUrl) => !mediaUrl.endsWith(".gif"))
          .slice(0, 200),
      ),
    );

    setMediaUrls(mediaUrls);
  }, [venues, setMediaUrls]);
}
