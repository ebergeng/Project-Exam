import useCreateVenueStore from "../../../storage/modalstate/createVenueModalState";
import CtaButton from "../../common/CtaButton";

const CreateVenueButton = () => {
  const openVenueModal = useCreateVenueStore(
    (state) => state.setCreateVenueModalOn,
  );

  return (
    <CtaButton type={"primary"} onClick={() => openVenueModal()}>
      {"Add venue"}
    </CtaButton>
  );
};

export default CreateVenueButton;
