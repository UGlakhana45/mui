// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDhWEjSTGkOkoCtGfHrtNozhiAcjxev8",
  authDomain: "webtest-d2d94.firebaseapp.com",
  projectId: "webtest-d2d94",
  storageBucket: "webtest-d2d94.appspot.com",
  messagingSenderId: "570357023524",
  appId: "1:570357023524:web:6ab0a302a66f5dd2aca9b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
