// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq-quOrOpk2kim8i9g_gSEhAjZ6StLqVg",
  authDomain: "instagram-clone-55bf0.firebaseapp.com",
  projectId: "instagram-clone-55bf0",
  storageBucket: "instagram-clone-55bf0.appspot.com",
  messagingSenderId: "196717475524",
  appId: "1:196717475524:web:e2384a400415987bfbbb91",
  measurementId: "G-L3ELYJLMXS",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
