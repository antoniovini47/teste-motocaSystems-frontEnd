import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHAvPO38mjCOqceKBWALPG0POx52sMOQc",
  authDomain: "test-motoca-frontend.firebaseapp.com",
  databaseURL: "https://test-motoca-frontend-default-rtdb.firebaseio.com",
  projectId: "test-motoca-frontend",
  storageBucket: "test-motoca-frontend.appspot.com",
  messagingSenderId: "209671249624",
  appId: "1:209671249624:web:428b2865f9e336566741ad",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
