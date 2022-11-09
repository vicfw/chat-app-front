import React from "react";
import * as Style from "./styles";
import * as Type from "./types";

const Button: React.FC<Type.ButtonProps> = ({ children, ...props }) => {
  return <Style.Container {...props}>{children}</Style.Container>;
};

export default Button;
