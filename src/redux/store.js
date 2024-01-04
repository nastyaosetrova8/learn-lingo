// import { configureStore } from '@reduxjs/toolkit';
// import { teachersReducer } from './teachers/teachersSlice';
// import { favoriteReducer } from './favorites/favoriteSlice';


// export const store = configureStore({
//   reducer: {
//     adverts: advertsReducer,
//     favorite: favoriteReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { userReducer } from './user/userSlice.js';
// import { rootReducer } from './rootSlice.js';
// import { teachersReducer } from './teachers/teachersSlice';
// import { favoriteReducer } from './favorites/favoriteSlice';
import { authReducer } from './auth/authSlice.js';

// const userPersistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer:{
    // user: persistReducer(userPersistConfig, userReducer),
    // root: rootReducer,
    auth: authReducer,
    // teachers: teachersReducer,
    // favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

