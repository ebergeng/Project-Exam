import styled from "styled-components";
import BookedVenueImg from "../pages/profilepage/BookedVenueImg";
import useCreateVenueStore from "../../storage/modalstate/createVenueModalState";
import EditIcon from "../../ui/icons/edit/EditIcon";
import TrashIcon from "../../ui/icons/trash/TrashIcon";
import { deleteVenue } from "../../api/venues/deleteVenue";
import useProfileStore from "../../storage/profileStore";

const Container = styled.div`
  width: 100%;
  padding: 5px 25px;
`;

const OptionsOverlay = styled.div`
  width: 100px;
  transform: translateX(100%); /* Plasser OptionsOverlay utenfor høyre side */
  transition: transform 0.3s ease-in-out; /* Legg til en overgangseffekt */
  background-color: var(--color-background);
  position: absolute;
  display: flex;
  align-items: center; /* Sentrer innholdet vertikalt */
  justify-content: space-around; /* Sentrer innholdet horisontalt */
  height: 100%;
  right: 0;
  box-shadow: var(--box-shadow);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  border-radius: 10px;
  gap: 5px;
  justify-content: space-around;
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-dm);
  margin-bottom: 5px;
  align-items: center;
  overflow: hidden;
  &:hover {
    background-color: var(--color-secondary-background-hover);
  }
  &:hover ${OptionsOverlay} {
    transform: translateX(0);
  }
  @media (max-width: 600px) {
    max-width: unset;
    grid-template-columns: auto;
  }
`;

const Info = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .head {
    text-decoration: none;
    color: var(--color-accent);
    font-size: 20px;
    text-decoration: none;
  }

  .data {
    color: var(--color-secondary);
  }
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CreatedVenue = ({ venue }) => {
  const reRender = useProfileStore((state) => state.updateProfileStore);
  const openVenueModal = useCreateVenueStore(
    (state) => state.setCreateVenueModalOn,
  );

  const setUpdateVenue = useCreateVenueStore((state) => state.setUpdateVenue);

  const token = useProfileStore((state) => state.profile.accessToken);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateStringCreated = venue.created;
  const FormattedDateStringCreated = new Date(
    dateStringCreated,
  ).toLocaleDateString("en-GB", options);

  function handleEdit() {
    setUpdateVenue(venue);
    openVenueModal();
  }

  async function handleDelete() {
    deleteVenue(venue.id, token);
    reRender();
  }

  return (
    <Container>
      <Wrapper>
        <BookedVenueImg media={venue.media} />

        <Info>
          <div className="head">{venue.name}</div>
          <div className="data">
            {venue.location.continent} {venue.location.country}{" "}
            {venue.location.city}
          </div>
        </Info>

        <Info>
          <div className="head">Created</div>
          <div className="data">{FormattedDateStringCreated}</div>
        </Info>
        <Info>
          <div className="head">Price</div>
          <div className="data">${venue.price}</div>
        </Info>
        <OptionsOverlay>
          <EditButton onClick={handleEdit}>
            {<EditIcon color={"var(--color-text)"} width="22" />}
          </EditButton>
          <EditButton onClick={handleDelete}>
            {<TrashIcon width="22" />}
          </EditButton>
        </OptionsOverlay>
      </Wrapper>
    </Container>
  );
};

export default CreatedVenue;
