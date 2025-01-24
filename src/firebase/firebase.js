import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxCt78skPGnrtr_faJE6cHpxI0D8L0qbA",
    authDomain: "binit-c6353.firebaseapp.com",
    projectId: "binit-c6353",
    storageBucket: "binit-c6353.appspot.com",
    messagingSenderId: "369501526499",
    appId: "1:369501526499:web:4d82d267d9de2d498c68d6",
    measurementId: "G-78JMC2SW8P"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { app, auth, db};