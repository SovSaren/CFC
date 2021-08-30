import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCGM6ZlHxnhAOuqRVUoeqNpm2ypuWijUaA",
    authDomain: "cfc-study-online.firebaseapp.com",
    projectId: "cfc-study-online",
    storageBucket: "cfc-study-online.appspot.com",
    messagingSenderId: "41346380900",
    appId: "1:41346380900:web:6c69c561ace78d71089b71",
    measurementId: "G-EMKZJEBQR2"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  
}
const firestore = firebase.firestore();
const fireStorage = firebase.storage();
const fireAuth= firebase.auth();

export {
  firestore,
  fireStorage,
  fireAuth
}