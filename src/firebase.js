import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwkd-59Vr2pNgmgUSHuNGhktUCXc3vh8o",
  authDomain: "clone-97757.firebaseapp.com",
  projectId: "clone-97757",
  storageBucket: "clone-97757.appspot.com",
  messagingSenderId: "780426165162",
  appId: "1:780426165162:web:20263999b77e64ec4f89d3",
  measurementId: "G-NTEQ74GXYP",
});

const auth = firebase.auth();

export { auth };
