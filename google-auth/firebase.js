import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-TA8z9H68roxqzNqbCOMtmU1ccLysE7E",
  authDomain: "next--auth-e0314.firebaseapp.com",
  projectId: "next--auth-e0314",
  storageBucket: "next--auth-e0314.appspot.com",
  messagingSenderId: "593018854992",
  appId: "1:593018854992:web:657be4769a261b96793b55"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;