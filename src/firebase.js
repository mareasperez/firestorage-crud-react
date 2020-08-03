import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBH19FjD9J8WK-W_6MwkQGvLBflLHKWtos",
    authDomain: "firestorage-crud-react.firebaseapp.com",
    databaseURL: "https://firestorage-crud-react.firebaseio.com",
    projectId: "firestorage-crud-react",
    storageBucket: "firestorage-crud-react.appspot.com",
    messagingSenderId: "96948133482",
    appId: "1:96948133482:web:9c5a5afedc595f222ab413"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();