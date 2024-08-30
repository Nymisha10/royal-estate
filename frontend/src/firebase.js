// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "royal-estate-cf424.firebaseapp.com",
  projectId: "royal-estate-cf424",
  storageBucket: "royal-estate-cf424.appspot.com",
  messagingSenderId: "707158697952",
  appId: "1:707158697952:web:711d8b56c891f2c2dc6d85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);