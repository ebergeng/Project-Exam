import { Input, Lable, Form, FormButton } from "../../../../styles/formStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../../../api/auth/loginUser";
import { useState } from "react";
import Loader from "../../common/Loader";
import useModalStateStore from "../../../storage/modalstate/useModalState";
import useProfileStore from "../../../storage/profileStore";

const schima = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid @stud.noroff.no Email")
      .required("Email is required")
      .matches(/.+@stud\.noroff\.no$/, "Must be a valid @stud.noroff.no Email"),
    password: yup
      .string()
      .required("password is a required")
      .min(8, "Must be 8 or more"),
  })
  .required();

const LogInModalForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const modalStateLogin = useModalStateStore(
    (state) => state.setModalStateLogin,
  );
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
      console.log("hey");
    } else {
      modalStateLogin(false);
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Lable htmlFor="email">Email</Lable>
      <Input type="email" name="email" id="email" {...register("email")} />
      <Lable htmlFor="password">Password</Lable>
      <Input
        type="password"
        name="password"
        id="password"
        {...register("password")}
      />
      <p>{errors.email?.message || errors.password?.message}</p>
      <FormButton type="submit" />
    </Form>
  );
};

export default LogInModalForm;
