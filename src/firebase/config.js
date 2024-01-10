import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKym-r0bHj8a8o-8Hhk9dJhsGdeOfHcF8",
  authDomain: "learnlingo-9aacd.firebaseapp.com",
  databaseURL:
    "https://learnlingo-9aacd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-9aacd",
  storageBucket: "learnlingo-9aacd.appspot.com",
  messagingSenderId: "456696266369",
  appId: "1:456696266369:web:45fc4940f3a31ad4ed5780",
  measurementId: "G-5HBJBPZFS3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();


