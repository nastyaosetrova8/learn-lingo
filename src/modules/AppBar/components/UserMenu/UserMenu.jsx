// import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../../../redux/auth/authThunks";
import AuthBtn from "../../../../shared/components/AuthBtn";
import { UserStyled } from "./UserMenuStyled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const {user} = useAuth();

  const handleLogOut = () => dispatch(logOutUser());

  return (
    <UserStyled>
      <p>
        name
        {/* {user.name} */}
      </p>
      <AuthBtn
        // variant="text"
        // sx = {{color: 'rgb(3, 3, 96)', textTransform: 'capitalize', fontSize: '18px', fontWeight: '600'}}
        // size="medium"
        // type="button"
        onClick={handleLogOut}
      >
        Logout
      </AuthBtn>
    </UserStyled>
  );
};
