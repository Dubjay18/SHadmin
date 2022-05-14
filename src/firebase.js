// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhjY-5XpE8_UJT9CCYdl3jQbnoak5tlO0",
  authDomain: "sidehustle-56e1e.firebaseapp.com",
  projectId: "sidehustle-56e1e",
  storageBucket: "sidehustle-56e1e.appspot.com",
  messagingSenderId: "135928697003",
  appId: "1:135928697003:web:ce0154cc34d36f5fb867ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
