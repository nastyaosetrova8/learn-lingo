import { useState } from "react";
import {
  NavContainerStyled,
  NavLinkStyled,
  NavStyled,
} from "./MobileNavigationStyled";
import { MenuToggle } from "../MenuToggle/MenuToggle";
import AuthNav from "../AuthNav/AuthNav";

const MobileNavigation = () => {
  //   const { isAuth } = useAuth();

  const [isOpen, setOpen] = useState(false);

  const handleCloseMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <NavContainerStyled>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      {isOpen && (
        <>
          <NavStyled>
            <NavLinkStyled to="/" onClick={handleCloseMenu}>
              Home
            </NavLinkStyled>
            <NavLinkStyled to="/teachers" onClick={handleCloseMenu}>
              Teachers
            </NavLinkStyled>
            {/* {isAuth && <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>} */}
            <AuthNav />
          </NavStyled>
        </>
      )}

      {/* {isAuth ? <UserMenu /> : <AuthNav />} */}
    </NavContainerStyled>
  );
};

export default MobileNavigation;
