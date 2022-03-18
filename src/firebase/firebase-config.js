import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDMxi1vvtx_BFFEXexOHxRWJya70XuQhs",
  authDomain: "react-app-curso-567dd.firebaseapp.com",
  projectId: "react-app-curso-567dd",
  storageBucket: "react-app-curso-567dd.appspot.com",
  messagingSenderId: "496325468472",
  appId: "1:496325468472:web:5f21a44996a8d8e51ee1cd",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
