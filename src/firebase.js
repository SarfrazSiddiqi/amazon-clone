// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyArh6wcILjOz0yVuDQmBFu7WgYyvk8-gKg",
    authDomain: "clone-83c83.firebaseapp.com",
    projectId: "clone-83c83",
    storageBucket: "clone-83c83.appspot.com",
    messagingSenderId: "1066417945639",
    appId: "1:1066417945639:web:5276a54e7c226d0c23e202",
    measurementId: "G-BH0DB5LZ8F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};