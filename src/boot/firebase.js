// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD2vC7b40VQPJIq4uMZm7pL9NWCCkyguHI",
  authDomain: "signuplogin-33787.firebaseapp.com",
  projectId: "signuplogin-33787",
  storageBucket: "signuplogin-33787.appspot.com",
  messagingSenderId: "348153833661",
  appId: "1:348153833661:web:f8ceec990fe9e5b1b22fd4"
};
// Initialize Firebase
let firebaseApp= firebase.initializeApp(firebaseConfig);
let firebaseAuth= firebaseApp.auth()
let firebaseDb= firebaseApp.database()
export {
  firebaseAuth, firebaseDb
} 