import { useDispatch } from "react-redux";
import AuthBtn from "../../../../shared/components/Buttons/AuthBtn";
import { AuthStyled, LoginIconStyled } from "./AuthNavStyled";
import { toggleShowModal } from "../../../../redux/modal/modalSlice";
import useAuth from "../../../../hooks/useAuth";
import { removeUser } from "../../../../redux/auth/authSlice";
import LoginBtn from "../../../../shared/components/Buttons/LoginBtn/LoginBtn";

const AuthNav = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const handleOpenModal = (e) => {
    dispatch(toggleShowModal(e.currentTarget.name));
  };

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <AuthStyled>
      {isAuth ? (
        <AuthBtn onClick={handleLogOut}>Logout</AuthBtn>
      ) : (
        <>
          <LoginBtn type="button" name="login" onClick={handleOpenModal}>
            <LoginIconStyled />
            Log in
          </LoginBtn>
          <AuthBtn onClick={handleOpenModal}>Registration</AuthBtn>
        </>
      )}
    </AuthStyled>
  );
};

export default AuthNav;
