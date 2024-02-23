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
import useProfileStore from "../storage/profileStore";
import HeroBannerManager from "../components/herobanner/HeorBannerManager";
import useErrorStore from "../storage/venueStore/errorStore";
import HerobannerError from "../components/herobanner/HeroBannerError";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showCalls, setShowCalls] = useState(false);
  const profile = useProfileStore((state) => state.profile);
  const error = useErrorStore((state) => state.error);

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

  const clearError = useErrorStore((state) => state.clearError);

  useEffect(() => {
    clearError();
  }, [location]);

  const contentForHeroBanner = () => {
    if (error) {
      return <HerobannerError />;
    }

    if (profile.venueManager) {
      return <HeroBannerManager />;
    } else {
      switch (location.pathname) {
        case "/":
          return <HeroBannerHome />;
        case "/profile":
          return <HeroBannerProfile />;
      }
    }

    const match = matchPath({ path: "/venue/:id" }, location.pathname);

    if (match) {
      const venueId = match.params.id;
      return <HeroBannerVenue venueId={venueId} />;
    }

    return null;
  };

  if (error) {
    console.log(error);
    return (
      <>
        <Header />
        {<HeroBanner2>{contentForHeroBanner()}</HeroBanner2>}
        <main></main>
        <Footer />
      </>
    );
  }

  if (profile.venueManager) {
    return (
      <>
        <Header />
        <HeroBanner2>{contentForHeroBanner()}</HeroBanner2>
        <main>{children}</main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {<HeroBanner2>{contentForHeroBanner()}</HeroBanner2>}
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
