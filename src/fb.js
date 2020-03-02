import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDmZs0AfAMpJlb7JskuPBOuZbw_PuRp1K0",
  authDomain: "project-management-jepm16.firebaseapp.com",
  databaseURL: "https://project-management-jepm16.firebaseio.com",
  projectId: "project-management-jepm16",
  storageBucket: "project-management-jepm16.appspot.com",
  messagingSenderId: "1048047609448",
  appId: "1:1048047609448:web:62fad507d5d22950f6fddd",
  measurementId: "G-C5VXEDY2S8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

db.settings({});

export default db;