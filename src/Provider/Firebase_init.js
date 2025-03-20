// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsVppTqE2ThmC1-Gt3Sqefuw1YHAPONmk",
  authDomain: "crowdcube-65051.firebaseapp.com",
  projectId: "crowdcube-65051",
  storageBucket: "crowdcube-65051.firebasestorage.app",
  messagingSenderId: "758532100236",
  appId: "1:758532100236:web:59b09b1fe549eb427a2ba9",
  measurementId: "G-6PEG79T70B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)