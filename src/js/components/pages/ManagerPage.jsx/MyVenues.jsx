import Collapse from "../../common/DropBox";
import useProfileStore from "../../../storage/profileStore";
import styled from "styled-components";
import CreatedVenue from "../../venues/CreatedVenue";
import DisplayMessage from "../../common/DisplayMessage";
import useErrorStore from "../../../storage/venueStore/errorStore";

const Li = styled.li`
  display: block;
`;

const Ul = styled.ul`
  padding: 15px 0px;
`;

const MyVenues = () => {
  const venues = useProfileStore((state) => state.profile.venues);
  const error = useErrorStore((state) => state.error);

  if (!error) {
    return (
      <Collapse contentName={"My Venues"} color={"#52A49A"}>
        <Ul>
          {venues && venues.length > 0 ? (
            venues.map((venue, index) => (
              <Li key={venue.id + index}>
                <CreatedVenue venue={venue} />{" "}
              </Li>
            ))
          ) : (
            <Li>
              <DisplayMessage type={"danger"}>
                You have no venues
              </DisplayMessage>
            </Li>
          )}
        </Ul>
      </Collapse>
    );
  }
};

export default MyVenues;
