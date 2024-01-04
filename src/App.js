// import logo from './logo.svg';
import './App.css';

import { Suspense, lazy} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './modules/SharedLayout/SharedLayout';
import Loader from './shared/components/Loader/Loader';

const Home = lazy(() => import('./Pages/Home/Home'));
const Teachers = lazy(() => import('./Pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./Pages/Favorites/Favorites'));

function App() {

  // const dispatch = useDispatch();
  // const token = useSelector(selectIsAuth);

  // useEffect(() => {
  //   if (!token) return;
  //   dispatch(currentUserThunk());
  // }, [dispatch, token]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            {/* <Route path="/favorite" element={<PrivateRoute><Favorites /></PrivateRoute>} /> */}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
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
