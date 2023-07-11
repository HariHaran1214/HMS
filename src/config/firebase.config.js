import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA_1Fg8XnKvtzXrYVRUZUGEJ5MNAAe2so",
  authDomain: "lms-auth-fe4e3.firebaseapp.com",
  projectId: "lms-auth-fe4e3",
  storageBucket: "lms-auth-fe4e3.appspot.com",
  messagingSenderId: "475902795903",
  appId: "1:475902795903:web:728cd6cdebaa0302b05f4a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);