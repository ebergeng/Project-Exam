import { matchPath, useLocation } from "react-router-dom";
import HeroBannerHome from "../components/herobanner/HeroBannerHome";
import HeroBanner2 from "../components/herobanner/Herobanner2";
import Header from "../components/header/Header";
import HeroBannerVenue from "../components/herobanner/HeroBannerVenue";

// ... other imports ...

const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);

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
      <footer>HEI</footer>
    </>
  );
};

export default Layout;
