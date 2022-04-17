// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7zfTiN9_yap9YaM7YCACnh1l0zokRiao",
    authDomain: "photography-studio-1001c.firebaseapp.com",
    projectId: "photography-studio-1001c",
    storageBucket: "photography-studio-1001c.appspot.com",
    messagingSenderId: "484750323856",
    appId: "1:484750323856:web:ec134511c150bc8554a815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;