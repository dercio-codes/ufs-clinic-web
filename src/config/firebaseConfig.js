// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyAwLIfQOlnxJnYNA2BN2BGiNKX8C8wnMWA",
  authDomain: "clinic-app-d216b.firebaseapp.com",
  projectId: "clinic-app-d216b",
  storageBucket: "clinic-app-d216b.appspot.com",
  messagingSenderId: "375855582857",
  appId: "1:375855582857:web:d599e9d7ceccd61dcb4058"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);