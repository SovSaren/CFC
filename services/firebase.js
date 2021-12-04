import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAva1QqqV_YCxI_MbTH9i3VAr2du1yJiIE",
  authDomain: "test2021-11730.firebaseapp.com",
  projectId: "test2021-11730",
  storageBucket: "test2021-11730.appspot.com",
  messagingSenderId: "102167961526",
  appId: "1:102167961526:web:91e409071e5dccfd7a2b17",
  measurementId: "G-57X3VDV2G2"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
  
}
const fireStore = firebase.firestore();
const fireStorage = firebase.storage();
const fireAuth= firebase.auth();

export {
  fireStore,
  fireStorage,
  fireAuth
}