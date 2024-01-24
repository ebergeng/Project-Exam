import { Input, Lable, Form, FormButton } from "../../../../styles/formStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useManagerStateStore from "../../../storage/modalstate/useManagerState";

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
    url: yup.string(),
    venueManager: yup.boolean(),
  })
  .required();

const SignUpModalForm = () => {
  const managerState = useManagerStateStore((state) => state.managerState);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schima),
  });

  function onSubmit(data) {
    setValue("venueManager", managerState);
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Lable htmlFor="name">Name</Lable>
      <Input type="name" id="name" name="name" {...register("name")} />

      <Lable htmlFor="email">Email</Lable>
      <Input type="email" name="email" id="email" {...register("email")} />

      <Lable htmlFor="url">Url</Lable>
      <Input type="url" id="url" name="url" {...register("url")} />

      <Lable htmlFor="password">Password</Lable>
      <Input
        type="password"
        name="password"
        id="password"
        {...register("password")}
      />
      <p>
        {errors.name?.message ||
          errors.email?.message ||
          errors.password?.message}
      </p>
      <FormButton type="submit" />
    </Form>
  );
};

export default SignUpModalForm;
