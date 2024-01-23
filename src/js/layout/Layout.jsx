import Header from "../components/header/Header";

// eslint-disable-next-line react/prop-types
const LayOut = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default LayOut;
