import  {AppBar}  from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
// import { useAuth } from "hooks/useAuth";

export const Layout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <div>
        <AppBar />
        <Outlet />
    </div>
  );
};
