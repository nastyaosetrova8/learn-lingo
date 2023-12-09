import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//------------------------------------------------
import { getFirestore } from "firebase/firestore";
import { browserSessionPersistence, initializeAuth } from "firebase/auth";
//------------------
//???
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbX74sZ9YwPGQdi6bAGkOz2NBaPrJ4H1Q",
  authDomain: "learn-lingo-89c60.firebaseapp.com",
  databaseURL:
    "https://learn-lingo-89c60-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learn-lingo-89c60",
  storageBucket: "learn-lingo-89c60.appspot.com",
  messagingSenderId: "1002919485901",
  appId: "1:1002919485901:web:eb9a7f32351a8e6cebe484",
  measurementId: "G-CNH7FEQFTK",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = initializeAuth(app, {
  persistence: browserSessionPersistence,
});
export const storage = getStorage(app);
export const db = getFirestore(app);
