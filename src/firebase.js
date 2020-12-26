import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyCsSdJ8ENAc0I29QmbKUHQRJ_UAAW0jef8",
    authDomain: "reacttodo-c4ad9.firebaseapp.com",
    projectId: "reacttodo-c4ad9",
    storageBucket: "reacttodo-c4ad9.appspot.com",
    messagingSenderId: "306885833858",
    appId: "1:306885833858:web:3905c6f493730ba947b09b", 
    measurementId: "G-0F3QJZ412D"
});

const db = firebase.firestore();

export default db;