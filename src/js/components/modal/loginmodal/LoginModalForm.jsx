import { Input, Label, Form, FormButton } from "../../../../styles/formStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../../api/auth/loginUser";
import { useState } from "react";
import Loader from "../../common/Loader";
import useModalStateStore from "../../../storage/modalstate/useModalState";
import useProfileStore from "../../../storage/profileStore";
import DisplayMessage from "../../common/DisplayMessage";

const schima = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid @stud.noroff.no Email")
      .required("Email is required")
      .matches(/.+@stud\.noroff\.no$/, "Must be a valid @stud.noroff.no Email"),
    password: yup
      .string()
      .required("Password is a required")
      .min(8, "Must be 8 or more"),
  })
  .required();

const LogInModalForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const modalStateLogin = useModalStateStore(
    (state) => state.setModalStateLogin,
  );
  const modalStateRegister = useModalStateStore(
    (state) => state.setModalStateRegister,
  );
  const modalStateMenu = useModalStateStore((state) => state.setModalStateMenu);
  const setProfileStore = useProfileStore((state) => state.setProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schima),
  });

  async function onSubmit(data) {
    setIsLoading(true);
    const response = await loginUser(data);
    console.log(response);
    if (response.errors) {
      setError(response.errors);
      console.error(response.errors);
    } else {
      modalStateLogin(false);
      modalStateRegister(false);
      modalStateMenu(false);
      setProfileStore({
        name: response.name,
        email: response.email,
        avatar: response.avatar,
        accessToken: response.accessToken,
        venueManager: response.venueManager,
      });
    }

    setIsLoading(false);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">
          {errors.email?.message ? (
            <DisplayMessage type={"alert"}>
              {errors.email?.message}
            </DisplayMessage>
          ) : (
            "Email"
          )}
        </Label>
        <Input type="email" name="email" id="email" {...register("email")} />
        <Label htmlFor="password">
          {errors.password?.message ? (
            <DisplayMessage type={"alert"}>
              {errors.password?.message}
            </DisplayMessage>
          ) : (
            "Password"
          )}{" "}
          <DisplayMessage type={"alert"}></DisplayMessage>
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          {...register("password")}
        />
        <FormButton type="submit" value="Log Inn" />
      </Form>
      {error.length > 0 ? (
        <DisplayMessage type={"alert"}>{error[0].message}</DisplayMessage>
      ) : null}
    </>
  );
};

export default LogInModalForm;
