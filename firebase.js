// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAarcKwMjUlo_I2Ko82j8btGML_2wWJa1w",
  authDomain: "laundry-app-78730.firebaseapp.com",
  projectId: "laundry-app-78730",
  storageBucket: "laundry-app-78730.appspot.com",
  messagingSenderId: "511730759892",
  appId: "1:511730759892:web:00920bf0ca250d67362341",
  measurementId: "G-KF427NPJJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
