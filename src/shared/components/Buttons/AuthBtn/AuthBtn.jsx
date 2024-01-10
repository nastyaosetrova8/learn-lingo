import { useDispatch } from "react-redux";
import { AuthBtnStyled } from "./AuthBtnStyled";
import { toggleShowModal } from "../../../../redux/modal/modalSlice";

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
