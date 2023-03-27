// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNgcteSOaY5oPf_WCctWZZqrB5TBx18NQ",
  authDomain: "mokey-blogging-948b3.firebaseapp.com",
  projectId: "mokey-blogging-948b3",
  storageBucket: "mokey-blogging-948b3.appspot.com",
  messagingSenderId: "562882329640",
  appId: "1:562882329640:web:db456051e1b7914c97491d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
