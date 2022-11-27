// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuDQOnTwaR6ScHUOphREvgAdHN2srzu0",
  authDomain: "reactjsproyecto.firebaseapp.com",
  projectId: "reactjsproyecto",
  storageBucket: "reactjsproyecto.appspot.com",
  messagingSenderId: "613670610086",
  appId: "1:613670610086:web:2d940ce750a63dfe284067"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

