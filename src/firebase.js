import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpR3RbzUWqdCkD3B5opMXBAKwJuv5EZI8",
  authDomain: "login-firebase-614e5.firebaseapp.com",
  projectId: "login-firebase-614e5",
  storageBucket: "login-firebase-614e5.appspot.com",
  messagingSenderId: "190764049007",
  appId: "1:190764049007:web:95863d6aa0dea8ec2c239a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);