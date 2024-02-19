import { yupResolver } from "@hookform/resolvers/yup";
import { FormButton, Input, Label } from "../../../../styles/formStyles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import DisplayMessage from "../../common/DisplayMessage";
import useProfileStore from "../../../storage/profileStore";
import { updateProfile } from "../../../api/profile/updateProfile";
import styled from "styled-components";
import useUpdateAvaterModalState from "../../../storage/modalstate/UpdateAvaterModalState";

const ImageContainer = styled.div`
  border-radius: 10px;
  max-width: 200px;
  overflow: hidden;
  margin: auto;
  img {
    width: 100%;
    max-height: 150px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  overflow-y: auto;
  text-align: start;
`;

const schima = yup
  .object({
    avatar: yup
      .string("Must be a valid URL")
      .url("Must be a valid URL")
      .required("Must be a valid URL")
      .required(),
  })
  .required();

const UpdateAvatarForm = () => {
  const closeModal = useUpdateAvaterModalState(
    (state) => state.setUpdateAvatarModalOff,
  );
  const profile = {
    profileImage: useProfileStore((state) => state.profile.avatar),
    name: useProfileStore((state) => state.profile.name),
    token: useProfileStore((state) => state.profile.accessToken),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schima),
    defaultValues: {
      avatar: "",
    },
  });

  const watchedAvatar = watch("avatar");

  const isValidHttpUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  };

  async function onSubmit(data) {
    await updateProfile(profile.name, data, profile.token);
    useProfileStore.getState().updateProfile({ avatar: data.avatar });
    closeModal();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ImageContainer>
        <img
          src={
            isValidHttpUrl(watchedAvatar)
              ? watchedAvatar
              : profile.avatar || profile.profileImage
          }
          alt={`Profile image for ${profile.name}`}
        />
      </ImageContainer>

      <Label htmlFor="name">
        {errors.avatar?.message ? (
          <DisplayMessage type={"alert"}>
            {errors.avatar?.message}
          </DisplayMessage>
        ) : (
          "Avatar Url"
        )}
      </Label>
      <Input
        type="Url"
        placeholder="Avatar Url"
        id="url"
        name="url"
        {...register("avatar")}
      />
      <FormButton value={"Update"} type="submit" />
    </Form>
  );
};

export default UpdateAvatarForm;
