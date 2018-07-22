import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl7Mivp-cIjNmirrmWBA57gShwSUP5Sgw",
  authDomain: "revents-f3f69.firebaseapp.com",
  databaseURL: "https://revents-f3f69.firebaseio.com",
  projectId: "revents-f3f69",
  storageBucket: "",
  messagingSenderId: "1046181729938"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
