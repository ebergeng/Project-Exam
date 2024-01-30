import Header from "../components/header/Header";
//import HeroBanner from "../components/herobanner/HeroBanner";
import HeroBanner2 from "../components/herobanner/Herobanner2";

// eslint-disable-next-line react/prop-types
const LayOut = ({ children }) => (
  <>
    <Header />
    <HeroBanner2 />
    <main>{children}</main>
  </>
);

export default LayOut;
