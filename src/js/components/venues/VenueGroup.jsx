import styled from "styled-components";
import Venue from "./Venue";
import { useState } from "react";
//import { getVenues } from "../../api/venues/getVenues"

const Container = styled.div`
  background-color: lightblue;
  height: 25vh;
  width: 100%;
  padding: 10px;
`;

const Wrapper = styled.div`
  background-color: gray;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const VenueGroup = () => {
  const [venues, setVenues] = useState([]);

  async function fetchVenues() {
    console.log("hey");
    //const fetch =  setVenues( await getVenues())

    setVenues([1]);
    console.log(venues);
  }

  return (
    <Container>
      <Wrapper>
        <Venue />
        <Venue />
        <Venue />
        <button onClick={fetchVenues}>getVen</button>
      </Wrapper>
    </Container>
  );
};

export default VenueGroup;
