import AuthBtn from "../../../../shared/components/AuthBtn";
import { AuthStyled, LoginBtnStyled, LoginIconStyled } from "./AuthNavStyled";

const AuthNav = () => {
  return (
    <AuthStyled>
      <LoginBtnStyled>
        <LoginIconStyled />
        Log in
      </LoginBtnStyled>
      <AuthBtn>Registration</AuthBtn>
    </AuthStyled>
  );
};

export default AuthNav;
