import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF5DP6PDPSYZc2rRAHnV1utiqY2yxqWbQ",
  authDomain: "clone-eccd0.firebaseapp.com",
  projectId: "clone-eccd0",
  storageBucket: "clone-eccd0.appspot.com",
  messagingSenderId: "1059288257015",
  appId: "1:1059288257015:web:c6c0d91f4ee0f944215ef2",
  measurementId: "G-B9LVGTJ9GD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };