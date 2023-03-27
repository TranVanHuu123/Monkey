import { IconEyeClose, IconEyeOpen } from "component/icon";
import React, { Fragment, useState } from "react";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return;
  return (
    <Fragment>
      <Input
        control={control}
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
