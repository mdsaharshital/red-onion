// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaD4i14rz7IIOJ7666inwHG42ag4bnlNk",
  authDomain: "red-onion-38a47.firebaseapp.com",
  projectId: "red-onion-38a47",
  storageBucket: "red-onion-38a47.appspot.com",
  messagingSenderId: "430817390493",
  appId: "1:430817390493:web:e90fd306b7e54db17e4974",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
