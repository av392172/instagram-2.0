// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI7QXhg4-r5LSjo0dkszC4HJPKCVtB2HI",
    authDomain: "insta-2-cc9ab.firebaseapp.com",
    projectId: "insta-2-cc9ab",
    storageBucket: "insta-2-cc9ab.appspot.com",
    messagingSenderId: "600316786",
    appId: "1:600316786:web:fe479b06e58b5f481d9beb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

