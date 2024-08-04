import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfEHwHe33iHjJWrtBnrSM-R_mxNVkB8RA",
  authDomain: "eighty-20-authentication.firebaseapp.com",
  projectId: "eighty-20-authentication",
  storageBucket: "eighty-20-authentication.appspot.com",
  messagingSenderId: "459876707618",
  appId: "1:459876707618:web:29b00b7dc2c556a391c97b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
