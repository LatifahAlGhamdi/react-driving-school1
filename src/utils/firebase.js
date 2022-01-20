import firebase from "firebase"
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "drivingschool-4b5a6.firebaseapp.com",
  projectId: "drivingschool-4b5a6",
  storageBucket: "drivingschool-4b5a6.appspot.com",
  messagingSenderId: "643616606710",
  appId: "1:643616606710:web:0c790f907551380399dfd7",
  measurementId: "G-XQ8GG0ZMX6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
