import styled from "styled-components";
import ShortCuts from "./ShortCuts";
import Contact from "./Contact";

const Container = styled.footer`
  min-height: 170px;

  padding: 20px;
  margin-top: 15px;
  z-index: -1;
  background: linear-gradient(
    0deg,
    rgba(0, 26, 51, 1) 0%,
    rgba(0, 51, 102, 1) 100%
  );
  box-shadow: 0px -4px 5px 0px #08080890;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  h3 {
    color: white;
    margin: 5px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <ShortCuts />
      <Contact />
    </Container>
  );
};

export default Footer;
