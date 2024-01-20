import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:
    "https://learnlingo-9aacd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();

// ========================================

// const firebaseConfig = {
//   apiKey: "AIzaSyDKym-r0bHj8a8o-8Hhk9dJhsGdeOfHcF8",
//   authDomain: "learnlingo-9aacd.firebaseapp.com",
//   databaseURL:
//     "https://learnlingo-9aacd-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "learnlingo-9aacd",
//   storageBucket: "learnlingo-9aacd.appspot.com",
//   messagingSenderId: "456696266369",
//   appId: "1:456696266369:web:45fc4940f3a31ad4ed5780",
//   measurementId: "G-5HBJBPZFS3",
// };
