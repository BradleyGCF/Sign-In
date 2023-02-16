// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXvSshIwmdKTHkdXpfgxBhU9AfOTbMEik",
  authDomain: "react-chef-auth.firebaseapp.com",
  projectId: "react-chef-auth",
  storageBucket: "react-chef-auth.appspot.com",
  messagingSenderId: "302004068732",
  appId: "1:302004068732:web:7d28e2011c5ecd531d84f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)