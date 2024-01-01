import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAv2zu4n1hjm4IOYijuVpIG2zY0CvMFIo0",
  authDomain: "rn-instagram-clone-live-a12f1.firebaseapp.com",
  projectId: "rn-instagram-clone-live-a12f1",
  storageBucket: "rn-instagram-clone-live-a12f1.appspot.com",
  messagingSenderId: "599411125920",
  appId: "1:599411125920:web:0ccd8b6eb1d9a447dbe3c5",
  measurementId: "G-WQCBKNZXYQ",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
