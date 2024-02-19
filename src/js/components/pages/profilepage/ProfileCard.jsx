import styled from "styled-components";
import useProfileStore from "../../../storage/profileStore";
import testImg from "../../../../assets/images/image2.jpeg";
import EditIcon from "../../../ui/icons/edit/EditIcon";
import useUpdateAvaterModalState from "../../../storage/modalstate/UpdateAvaterModalState";

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  height: 250px;
  background-color: var(--color-primary);
  border-radius: 10px;
  box-shadow: var(--box-shadow-dm);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px 10px 10px 10px;

  @media (max-width: 600px) {
    max-width: unset;
  }
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  max-width: 200px;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 150px;
  }
`;

const ContainerHeader = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: end;
`;

const EditButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ProfileDetails = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    margin: 0;
    color: white;
  }

  .name {
    font-size: 20px;
  }

  .email {
    color: #9e9e9e;
  }
`;

const ProfileCard = () => {
  const profile = {
    profileImage: useProfileStore((state) => state.profile.avatar),
    name: useProfileStore((state) => state.profile.name),
    email: useProfileStore((state) => state.profile.email),
  };

  const openUpdateAvaterModal = useUpdateAvaterModalState(
    (state) => state.setUpdateAvatarModalOn,
  );

  return (
    <Wrapper>
      <ContainerHeader>
        <EditButton onClick={() => openUpdateAvaterModal()}>
          <EditIcon width="26px" />
        </EditButton>{" "}
      </ContainerHeader>
      <ImageContainer>
        <img
          src={profile.profileImage ? profile.profileImage : testImg}
          alt={`profile image for ${profile.name}`}
        />
      </ImageContainer>
      <ProfileDetails>
        <div className="name">{profile.name}</div>
        <div className="email">{profile.email}</div>
      </ProfileDetails>
    </Wrapper>
  );
};

export default ProfileCard;
