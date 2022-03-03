import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQs5G0mEisNr8WHA_JrbbmTzX4AMcTDp0",
  authDomain: "react-flutter-71e7b.firebaseapp.com",
  projectId: "react-flutter-71e7b",
  storageBucket: "react-flutter-71e7b.appspot.com",
  messagingSenderId: "53214210771",
  appId: "1:53214210771:web:7677b5b4048f9004a24226",
  measurementId: "G-50ZCB1W19K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const analytics = getAnalytics(app);