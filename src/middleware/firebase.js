import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA_yCNDUbIahXHyapBEI04eR2QpWMnSb6E",
  authDomain: "design-ecommerce-283d9.firebaseapp.com",
  projectId: "design-ecommerce-283d9",
  storageBucket: "design-ecommerce-283d9.appspot.com",
  messagingSenderId: "266643108224",
  appId: "1:266643108224:web:2c00a2987e993544b55165"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

