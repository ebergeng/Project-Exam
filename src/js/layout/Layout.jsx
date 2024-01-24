import Header from "../components/header/Header";
import HeroBanner from "../components/herobanner/HeroBanner";

// eslint-disable-next-line react/prop-types
const LayOut = ({ children }) => (
  <>
    <Header />
    <HeroBanner />
    <main>{children}</main>
  </>
);

export default LayOut;
