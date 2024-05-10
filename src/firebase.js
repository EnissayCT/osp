import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf-7DUSKhrXbtNV6hJ0LrDk32wye_PXSI",
    authDomain: "rayti-b098f.firebaseapp.com",
    projectId: "rayti-b098f",
    storageBucket: "rayti-b098f.appspot.com",
    messagingSenderId: "217343849402",
    appId: "1:217343849402:web:b635bbcb59a3bff8f46383",
    measurementId: "G-CLDVLXJ9P3",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


//initialize Firestore
const db = getFirestore(app);

export { auth, googleProvider, db };
export default app;
