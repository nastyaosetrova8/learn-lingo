import AppBar from "../AppBar";
import { Outlet } from "react-router-dom";
// import { useAuth } from "hooks/useAuth";

const SharedLayout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <div>
        <AppBar />
        <Outlet />
    </div>
  );
};

export default SharedLayout;