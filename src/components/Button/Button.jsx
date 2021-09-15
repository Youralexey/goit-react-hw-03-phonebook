import React from "react";
import { CustomButton } from "./Button.styled";

function Button({ text, type, onClick }) {
  return (
    <CustomButton type={type} onClick={onClick}>
      {text}
    </CustomButton>
  );
}

export default Button;
