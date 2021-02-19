import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhrAfhLXddyz0eck_xUW3AFp4sOAdZ7vU",
    authDomain: "clone-71a08.firebaseapp.com",
    projectId: "clone-71a08",
    storageBucket: "clone-71a08.appspot.com",
    messagingSenderId: "1040974112682",
    appId: "1:1040974112682:web:fb1308a5a6f5bc5bf22dd3",
    measurementId: "G-NPRKM4RE9B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

