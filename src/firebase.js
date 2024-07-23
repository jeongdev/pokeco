// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDedURNeert9O2TuhXZDUxR5pwYPNtRn4Q",
  authDomain: "pokeco-cb9b4.firebaseapp.com",
  projectId: "pokeco-cb9b4",
  storageBucket: "pokeco-cb9b4.appspot.com",
  messagingSenderId: "661861575731",
  appId: "1:661861575731:web:7257e5c4a77995c0734746",
  measurementId: "G-5E2CCP3BYW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
