import React from "react";
import { LoginBtnStyled } from "./LoginBtnStyled";

const LoginBtn = ({ children, onClick }) => {
  return (
    <LoginBtnStyled type="button" name="login" onClick={onClick}>
      {children}
    </LoginBtnStyled>
  );
};

export default LoginBtn;
