// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyK1QQkI0qMOKx2GijRrwnsqzTIuETbgY",
  authDomain: "loudly-worn-app.firebaseapp.com",
  databaseURL: "https://loudly-worn-app-default-rtdb.firebaseio.com",
  projectId: "loudly-worn-app",
  storageBucket: "loudly-worn-app.firebasestorage.app",
  messagingSenderId: "884619487189",
  appId: "1:884619487189:web:3d11ff3df4673bc2c97f5c",
  measurementId: "G-YXJ1Q538KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);