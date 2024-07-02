// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDF5bu_63BSiTGAKBf6SFPRw6aM3ZUfCNk",
    authDomain: "e-commerce-nombre.firebaseapp.com",
    projectId: "e-commerce-nombre",
    storageBucket: "e-commerce-nombre.appspot.com",
    messagingSenderId: "58658355362",
    appId: "1:58658355362:web:a5741c500b2bd270eebffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);