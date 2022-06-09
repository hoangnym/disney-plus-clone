import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUfmuFqLRDUVi7fQJuEZpF6SKXTGTbdYk",
  authDomain: "react-demos-9fb8e.firebaseapp.com",
  projectId: "react-demos-9fb8e",
  storageBucket: "react-demos-9fb8e.appspot.com",
  messagingSenderId: "659794705641",
  appId: "1:659794705641:web:e82fc03e1f674badfdc478",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
