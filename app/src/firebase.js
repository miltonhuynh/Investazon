import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjv4XsLBepVBMttzIFPTFgXWCkhhDnBPA",
  authDomain: "stockazon-d0997.firebaseapp.com",
  projectId: "stockazon-d0997",
  storageBucket: "stockazon-d0997.appspot.com",
  messagingSenderId: "181041395539",
  appId: "1:181041395539:web:e5ba012d97182dd75313a6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };