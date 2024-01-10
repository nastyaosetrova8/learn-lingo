import { Header, LogoStyled, LogoTextStyled, StyledHomeContainer } from "./AppBarStyled";
import Navigation from "./components/Navigation/Navigation";
import AuthNav from "./components/AuthNav/AuthNav";
import { useMediaQuery } from "react-responsive";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import FlagIcon from "../../shared/components/Icons/FlagIcon/FlagIcon";

const AppBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledHomeContainer>
    <Header>
      <LogoStyled to="/">
        <FlagIcon />
        <LogoTextStyled>LearnLingo</LogoTextStyled>
      </LogoStyled>
      {!isMobile && <Navigation />}
      {isMobile ? <MobileNavigation /> : <AuthNav />}
    </Header>
    </StyledHomeContainer>
  );
};

export default AppBar;
