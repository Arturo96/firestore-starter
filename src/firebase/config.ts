import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase configurado');

  export default firebase.firestore();