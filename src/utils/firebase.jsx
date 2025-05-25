// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvItvCRzfC5Ad7sKOCwWqMcl2zk-pWi2k",
  authDomain: "netflix-1b890.firebaseapp.com",
  projectId: "netflix-1b890",
  storageBucket: "netflix-1b890.firebasestorage.app",
  messagingSenderId: "759706772606",
  appId: "1:759706772606:web:f2f789864898d943e3242f",
  measurementId: "G-1Z88Y6H9YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);