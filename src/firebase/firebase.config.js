// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN7h9HOP58RqS5tqnTe9JTy1ELP9zuWi4",
  authDomain: "eco-quest-37f67.firebaseapp.com",
  projectId: "eco-quest-37f67",
  storageBucket: "eco-quest-37f67.firebasestorage.app",
  messagingSenderId: "859900697442",
  appId: "1:859900697442:web:ee6efcc7a300714f82ea3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
