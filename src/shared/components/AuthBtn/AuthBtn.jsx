import { AuthBtnStyled } from "./AuthBtnStyled";

const AuthBtn = ({ children }) => {
  return (
    <>
      <AuthBtnStyled type="button">{children}</AuthBtnStyled>
    </>
  );
};

export default AuthBtn;

