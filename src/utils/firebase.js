
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMZWamgd8MpDHveqNp2pn3mLWmDy9Rnk8",
  authDomain: "netflix-7f5b8.firebaseapp.com",
  projectId: "netflix-7f5b8",
  storageBucket: "netflix-7f5b8.firebasestorage.app",
  messagingSenderId: "603174923255",
  appId: "1:603174923255:web:6b321511306df097105cf2",
  measurementId: "G-2QBK1XHZEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();