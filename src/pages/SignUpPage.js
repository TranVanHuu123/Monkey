import React, { useEffect } from "react";
import Label from "../component/label/Label";
import Input from "../component/input/Input";
import { useForm } from "react-hook-form";
import Field from "../component/field/Field";
import Button from "../component/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import AuthenticationPages from "./AuthenticationPages";
import InputPasswordToggle from "component/input/InputPasswordToggle";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter valid email"),
  password: yup
    .string()
    .min(8, "Your pass must be at least 8 charactor")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { register, errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success(" Register susccessfully");
    navigate("/");
  };

  useEffect(() => {
    const arrayErros = Object.values(errors);
    if (arrayErros.length > 0) {
      toast.error(arrayErros[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  });
  return (
    <AuthenticationPages>
      <form
        className="form"
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            control={control}
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You already have an account? <NavLink to={"/sign-in"}>Login</NavLink>
        </div>
        <Button
          type="submit"
          style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign up
        </Button>
      </form>
    </AuthenticationPages>
  );
};

export default SignUpPage;
