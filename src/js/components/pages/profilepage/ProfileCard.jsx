import styled from "styled-components";
import useProfileStore from "../../../storage/profileStore";
import testImg from "../../../../assets/images/image2.jpeg";

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 10px;
  box-shadow: var(--box-shadow-dm);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 600px) {
    max-width: unset;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  max-width: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ProfileDetails = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    margin: 0;
    color: var(--color-text-dm);
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

  return (
    <Wrapper>
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
