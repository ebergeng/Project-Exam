import { matchPath, useLocation } from "react-router-dom";
import HeroBannerHome from "../components/herobanner/HeroBannerHome";
import HeroBanner2 from "../components/herobanner/Herobanner2";
import Header from "../components/header/Header";
import HeroBannerVenue from "../components/herobanner/HeroBannerVenue";
import SearchCall from "../components/common/SearchCall";
import HomeCall from "../components/common/HomeCall";
import { useEffect, useState } from "react";
import HeroBannerProfile from "../components/herobanner/HerobannerProfile";
import Modal from "../components/modal/Modal";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showCalls, setShowCalls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
      );
      const threshold = vh * 0.3;

      if (window.scrollY > threshold) {
        setShowCalls(true);
      } else {
        setShowCalls(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentForHeroBanner = () => {
    switch (location.pathname) {
      case "/":
        return <HeroBannerHome />;
      case "/profile":
        return <HeroBannerProfile />;
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
      <main>
        {children}
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
      </main>

      <Footer />
      <Modal />
    </>
  );
};

export default Layout;
