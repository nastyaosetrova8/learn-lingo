// import { useAuth } from "hooks/useAuth";
import { Header } from "./AppBarStyled";


const AppBar = () => {
    // const { isLoggedIn } = useAuth();
  
    return (
      <Header>
        {/* <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Header>
    );
  };

  export default AppBar;