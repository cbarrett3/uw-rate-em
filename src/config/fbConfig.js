import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC_-xnkHrSKNIVdl6tlBf4OptRvKyLcUGI",
  authDomain: "spike-7d83e.firebaseapp.com",
  databaseURL: "https://spike-7d83e.firebaseio.com",
  projectId: "spike-7d83e",
  storageBucket: "spike-7d83e.appspot.com",
  messagingSenderId: "1066432182050"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
