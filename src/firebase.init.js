// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOIfOlVk4KGUQEZvilp8zvKUYDakqbkUc",
  authDomain: "ema-john-a55e6.firebaseapp.com",
  projectId: "ema-john-a55e6",
  storageBucket: "ema-john-a55e6.appspot.com",
  messagingSenderId: "1049642088974",
  appId: "1:1049642088974:web:4f100b537b4f5c0db99a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;