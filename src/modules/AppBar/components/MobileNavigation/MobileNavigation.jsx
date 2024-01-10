import { useEffect, useState } from "react";
import { NavLinkStyled, NavStyled } from "./MobileNavigationStyled";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import AuthBtn from "../../../../shared/components/Buttons/AuthBtn";
import { AuthStyled, LoginIconStyled } from "../AuthNav/AuthNavStyled";
import { useDispatch } from "react-redux";
import { toggleShowModal } from "../../../../redux/modal/modalSlice";
import { removeUser } from "../../../../redux/auth/authSlice";
import LoginBtn from "../../../../shared/components/Buttons/LoginBtn/LoginBtn";
import useAuth from "../../../../hooks/useAuth";

const MobileNavigation = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    }
    if (!isOpen) {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const handleToggleMenu = (e) => {
    setOpen(!isOpen);
  };

  const handleOpenModal = (e) => {
    dispatch(toggleShowModal(e.currentTarget.name));
    handleToggleMenu();
  };

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <>
      <MenuToggle
        isOpen={isOpen}
        name="mobileNavigation"
        toggle={handleToggleMenu}
      />

      {isOpen && (
        <NavStyled>
          <NavLinkStyled to="/" onClick={handleToggleMenu}>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/teachers" onClick={handleToggleMenu}>
            Teachers
          </NavLinkStyled>
          {isAuth && <NavLinkStyled to="/favorites" onClick={handleToggleMenu}>Favorites</NavLinkStyled>}
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
        </NavStyled>
      )}
    </>
  );
};

export default MobileNavigation;
