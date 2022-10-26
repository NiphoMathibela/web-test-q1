// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0lBWtak_JPpHhxJ3cASy_zBmTx72yzNY",
  authDomain: "web-test-q1-9694b.firebaseapp.com",
  projectId: "web-test-q1-9694b",
  storageBucket: "web-test-q1-9694b.appspot.com",
  messagingSenderId: "615068020084",
  appId: "1:615068020084:web:1296ef8b4d282edc11d021",
  measurementId: "G-FLE6EPQZ4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)