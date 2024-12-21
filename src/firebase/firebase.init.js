// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8N-lmhbH61lKh051TJk2yVNB2qGKSlM",
  authDomain: "job-portal-b7a7b.firebaseapp.com",
  projectId: "job-portal-b7a7b",
  storageBucket: "job-portal-b7a7b.firebasestorage.app",
  messagingSenderId: "1144897475",
  appId: "1:1144897475:web:2e3508579a4987af52c776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);