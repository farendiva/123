// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuhM_Fo6YWFuT0_L7VWTvj4wYjDmx5DDk",
  authDomain: "scfproject-e9c70.firebaseapp.com",
  projectId: "scfproject-e9c70",
  storageBucket: "scfproject-e9c70.appspot.com",
  messagingSenderId: "781198607551",
  appId: "1:781198607551:web:4bc77127ebd5389b64b20a",
  measurementId: "G-L6CQD03FDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
