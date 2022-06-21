
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBq7B4K5cJ1nKwiD2oFxEuELRRxGWC4IJA",
    authDomain: "registerlogin-c4c72.firebaseapp.com",
    projectId: "registerlogin-c4c72",
    storageBucket: "registerlogin-c4c72.appspot.com",
    messagingSenderId: "903445038787",
    appId: "1:903445038787:web:7fd9cb243ad7e5626f0476"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);