import Collapse from "../../common/DropBox";
import useProfileStore from "../../../storage/profileStore";
import styled from "styled-components";
import CreatedVenue from "../../venues/CreatedVenue";
import DisplayMessage from "../../common/DisplayMessage";

const Li = styled.li`
  display: block;
`;

const Ul = styled.ul`
  padding: 15px 0px;
`;

const MyVenues = () => {
  const venues = useProfileStore((state) => state.profile.venues);

  return (
    <Collapse contentName={"My Venues"} color={"#52A49A"}>
      <Ul>
        {venues ? (
          venues.map((venue, index) => (
            <Li key={venue.id + index}>
              <CreatedVenue venue={venue} />{" "}
            </Li>
          ))
        ) : (
          <Li>
            <DisplayMessage type={"alert"}>You have no venues</DisplayMessage>
          </Li>
        )}
      </Ul>
    </Collapse>
  );
};

export default MyVenues;
