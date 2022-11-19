// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCg0YH3qFWSuksFpNYeW-XfNwNNr4SrFw8",
    authDomain: "todo-firebase-firestore-351c7.firebaseapp.com",
    projectId: "todo-firebase-firestore-351c7",
    storageBucket: "todo-firebase-firestore-351c7.appspot.com",
    messagingSenderId: "182968320654",
    appId: "1:182968320654:web:4bbcb484cf8f3336673fdf",
    measurementId: "G-JRB4ZXYM0T"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };