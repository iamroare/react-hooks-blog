
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBSxyAHK1Uhc6zKvwrASzkgTKUIpM1o0s0",
  authDomain: "react-hooks-blog-90c8f.firebaseapp.com",
  projectId: "react-hooks-blog-90c8f",
  storageBucket: "react-hooks-blog-90c8f.appspot.com",
  messagingSenderId: "489530018311",
  appId: "1:489530018311:web:49bfa25c83e862208ab8a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);


export const firestore = firebase.firestore();