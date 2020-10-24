import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSUaEeJYuw56ekZkqHngRPt9Idre-6Vr8",
  authDomain: "tinder-clone-4b812.firebaseapp.com",
  databaseURL: "https://tinder-clone-4b812.firebaseio.com",
  projectId: "tinder-clone-4b812",
  storageBucket: "tinder-clone-4b812.appspot.com",
  messagingSenderId: "654059350419",
  appId: "1:654059350419:web:e4f25b178159e5ebeb2066",
  measurementId: "G-7ZGTJVYZC3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
