import { matchPath, useLocation } from "react-router-dom";
import HeroBannerHome from "../components/herobanner/HeroBannerHome";
import HeroBanner2 from "../components/herobanner/Herobanner2";
import Header from "../components/header/Header";
import HeroBannerVenue from "../components/herobanner/HeroBannerVenue";
import SearchCall from "../components/common/SearchCall";
import HomeCall from "../components/common/HomeCall";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showCalls, setShowCalls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Konverter 30vh til piksler.
      // Du kan justere dette basert på nøyaktig hvor langt ned du vil at brukeren skal skrolle før komponentene vises.
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      const threshold = vh * 0.3; // 30% av viewport-høyden

      if (window.scrollY > threshold) {
        setShowCalls(true);
      } else {
        setShowCalls(false);
      }
    };

    // Legg til scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Fjern event listener når komponenten unmounts for å forhindre memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Tom dependency array betyr at effekten kun kjører når komponenten mounts

  const contentForHeroBanner = () => {
    if (location.pathname === "/") {
      return <HeroBannerHome />;
    }

    const match = matchPath({ path: "/venue/:id" }, location.pathname);

    if (match) {
      const venueId = match.params.id;
      return <HeroBannerVenue venueId={venueId} />;
    }

    return null;
  };

  return (
    <>
      <Header />
      <HeroBanner2>{contentForHeroBanner()}</HeroBanner2>
      <main>{children}</main>
      {location.pathname === "/" && showCalls ? (
        <>
          <SearchCall />
          <HomeCall />
        </>
      ) : null || location.pathname === "/" ? null : (
        <>
          <SearchCall />
          <HomeCall />
        </>
      )}
    </>
  );
};

export default Layout;
