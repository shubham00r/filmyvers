// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjzM_QP5FUHLajiDp8qvCOoIzbVcDrxXQ",
  authDomain: "flimyverse-c6be8.firebaseapp.com",
  projectId: "flimyverse-c6be8",
  storageBucket: "flimyverse-c6be8.appspot.com",
  messagingSenderId: "441057809981",
  appId: "1:441057809981:web:ad05b9a646ec0cd89b7c54",
  measurementId: "G-XPF5XQQT9Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const MovieRef = collection(db, "movie");
export const reviewsRef = collection(db, "reviews");
// const analytics = getAnalytics(app);
export default app;
