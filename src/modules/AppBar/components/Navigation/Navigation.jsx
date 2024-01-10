import useAuth from "../../../../hooks/useAuth";
import {
  NavContainerStyled,
  NavLinkStyled,
  NavStyled,
} from "./NavigationStyled";

const Navigation = () => {
    const { isAuth } = useAuth();

  return (
    <NavContainerStyled>
      <NavStyled>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/teachers">Teachers</NavLinkStyled>
        {isAuth && <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>}
      </NavStyled>
    </NavContainerStyled>
  );
};

export default Navigation;
