// import { useAuth } from "hooks/useAuth";
import FlagIcon from "../../shared/components/FlagIcon/FlagIcon";
import { Header, LogoStyled, LogoTextStyled } from "./AppBarStyled";
import Navigation from "./components/Navigation/Navigation";
import AuthNav from "./components/AuthNav/AuthNav";
import { useMediaQuery } from "react-responsive";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";

const AppBar = () => {
  // const { isAuth } = useAuth();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Header>
      <LogoStyled to="/">
        <FlagIcon />
        <LogoTextStyled>LearnLingo</LogoTextStyled>
      </LogoStyled>
      {!isMobile && <Navigation />}

      {/* {isAuth ? <UserMenu /> : <AuthNav />} */}

      {isMobile ? <MobileNavigation /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
