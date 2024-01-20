// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7pBboi2JH_uqGOXgwwJNl42U5FujHWmg",
  authDomain: "banluck888-f3d54.firebaseapp.com",
  databaseURL: "https://banluck888-f3d54-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "banluck888-f3d54",
  storageBucket: "banluck888-f3d54.appspot.com",
  messagingSenderId: "755396521504",
  appId: "1:755396521504:web:6ecca6310f1b9de90b1645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { db, auth };