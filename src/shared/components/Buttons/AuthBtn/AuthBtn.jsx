import { AuthBtnStyled } from "./AuthBtnStyled";

const AuthBtn = ({ children, onClick }) => {
  return (
    <>
      <AuthBtnStyled type="button" name="register" onClick={onClick}>
        {children}
      </AuthBtnStyled>
    </>
  );
};

export default AuthBtn;
