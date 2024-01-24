import { Input, Lable, Form, FormButton } from "../../../../styles/formStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schima),
  });

  function onSubmit(data) {
    console.log(data);
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
