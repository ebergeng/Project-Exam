import { Input, Label, Form, FormButton } from "../../../../styles/formStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useManagerStateStore from "../../../storage/modalstate/useManagerState";
import ToggleSwitch from "./ToggleSwitch";
import { registerUser } from "../../../api/auth/registerUser";
import DisplayMessage from "../../common/DisplayMessage";
import { useState } from "react";
import Loader from "../../common/Loader";
import LoginButton from "../../header/buttons/LogInButton";

const schima = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Must be atleast 2 characters long"),
    email: yup
      .string()
      .email("Must be a valid @stud.noroff.no Email")
      .required("Email is required")
      .matches(/.+@stud\.noroff\.no$/, "Must be a valid @stud.noroff.no Email"),
    password: yup
      .string()
      .required("password is a required")
      .min(8, "Must be 8 or more"),
    avatar: yup.string(),
    venueManager: yup.boolean(),
  })
  .required();

const SignUpModalForm = () => {
  const managerState = useManagerStateStore((state) => state.managerState);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [registerd, setRegisterd] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schima),
  });

  async function onSubmit(data) {
    setIsLoading(true);
    setValue("venueManager", managerState);

    const response = await registerUser(data);
    if (response.errors) {
      setError(response.errors);
      console.error(response.errors);
    } else {
      setRegisterd(true);
    }

    setIsLoading(false);
  }

  if (isLoading) {
    return <Loader />;
  }
  if (registerd) {
    return (
      <>
        <DisplayMessage type={"info"}>Successfully registerd!</DisplayMessage>
        <LoginButton />
      </>
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ToggleSwitch />

        <Label color="white" htmlFor="name">
          {errors.name?.message ? (
            <DisplayMessage type={"alert"}>
              {errors.name?.message}
            </DisplayMessage>
          ) : (
            "Name"
          )}
        </Label>
        <Input type="name" id="name" name="name" {...register("name")} />

        <Label color="white" htmlFor="email">
          {errors.email?.message ? (
            <DisplayMessage type={"alert"}>
              {errors.email?.message}
            </DisplayMessage>
          ) : (
            "Email"
          )}
        </Label>
        <Input type="email" name="email" id="email" {...register("email")} />

        <Label color="white" htmlFor="url">
          Profile Image Url
        </Label>
        <Input type="url" id="avatar" name="avatar" {...register("avatar")} />

        <Label color="white" htmlFor="password">
          {errors.password?.message ? (
            <DisplayMessage type={"alert"}>
              {errors.password?.message}
            </DisplayMessage>
          ) : (
            "Password"
          )}
        </Label>
        <Input
          type="password"
          name="password"
          id="password"
          {...register("password")}
        />
        <FormButton color="white" type="submit" value="Sign Up" />
      </Form>
      {error.length > 0 ? (
        <DisplayMessage type={"alert"}>{error[0].message}</DisplayMessage>
      ) : null}
    </>
  );
};

export default SignUpModalForm;
