// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRw-vTINCBOZTrDGP1oyrilfCJ3LVZD1U",
  authDomain: "asian-net.firebaseapp.com",
  projectId: "asian-net",
  storageBucket: "asian-net.appspot.com",
  messagingSenderId: "174848739974",
  appId: "1:174848739974:web:af8bc0b63e3de967addf07",
  measurementId: "G-9P0E6VRS67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

