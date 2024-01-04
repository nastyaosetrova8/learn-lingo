// import { useSelector } from "react-redux";

// const useAuth = () => {
//     const { stateChange } = useSelector((state) => state.auth);
  
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           const updateInfo = {
//             userId: user.uid,
//             nickname: user.displayName,
//             email: user.email,
//             avatar: user.photoURL,
//           };
//           dispatch(onStateChange(updateInfo));
//         }
//       });
//     }, []);
//     const routing = useRoute(stateChange);
  
//     return <NavigationContainer>{routing}</NavigationContainer>;
//   };

//   export default useAuth;