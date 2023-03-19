import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9QlSNVoEy_x0oGz-zbGxdKgZncLsEth0",
  authDomain: "daily-dev-blogs.firebaseapp.com",
  projectId: "daily-dev-blogs",
  storageBucket: "daily-dev-blogs.appspot.com",
  messagingSenderId: "247028011848",
  appId: "1:247028011848:web:95160794d422922e4c197d",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Create Timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
