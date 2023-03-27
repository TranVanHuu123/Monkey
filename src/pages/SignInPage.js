import { Button } from "component/button";
import { Field } from "component/field";
import { Input } from "component/input";
import { Label } from "component/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationPages from "./AuthenticationPages";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import InputPasswordToggle from "component/input/InputPasswordToggle";

const schema = yup.object({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter valid email"),
  password: yup
    .string()
    .min(8, "Your pass must be at least 8 charactor")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const arrayErros = Object.values(errors);
    if (arrayErros.length > 0) {
      toast.error(arrayErros[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  const { userInfo } = useAuth();
  const navvigate = useNavigate();
  useEffect(() => {
    document.title = "Login page";
    if (userInfo?.email) navvigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navvigate("/");
  };
  return (
    <AuthenticationPages>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="email"> Email address</Label>
          <Input
            type="email"
            control={control}
            name="email"
            placeholder="Enter your email"
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password"> Password</Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You have not have an account?{" "}
          <NavLink to={"/sign-up"}>Register</NavLink>
        </div>
        <Button
          type="submit"
          style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </AuthenticationPages>
  );
};

export default SignInPage;
