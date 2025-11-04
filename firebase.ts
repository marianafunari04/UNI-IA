// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEA5e1VA-beaatJs5e04XTy0CTI_9jXuw",
  authDomain: "uni-ia.firebaseapp.com",
  projectId: "uni-ia",
  storageBucket: "uni-ia.firebasestorage.app",
  messagingSenderId: "383520334593",
  appId: "1:383520334593:web:19acce61dcd6a1e699f100",
  measurementId: "G-KHXXQYFF1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
