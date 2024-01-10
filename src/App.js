import './App.css';
import PrivateRoute from "../src/Guard/PrivateRoute";
import { Suspense, lazy} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './modules/SharedLayout/SharedLayout';
import Loader from './shared/components/Loader/Loader';
import NotificationToast from './shared/NotificationToastify/NotificationToast';

const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

function App() {

  // const dispatch = useDispatch();
  // const isAuth = useAuth();

  // useEffect(() => {
  //   if (!isAuth) return;
  //   dispatch(currentUserThunk());
  // }, [dispatch, isAuth]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <NotificationToast />
    </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
