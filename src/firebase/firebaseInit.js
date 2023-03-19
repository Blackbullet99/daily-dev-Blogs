import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9QlSNVoEy_x0oGz-zbGxdKgZncLsEth0",
  authDomain: "daily-dev-blogs.firebaseapp.com",
  projectId: "daily-dev-blogs",
  storageBucket: "daily-dev-blogs.appspot.com",
  messagingSenderId: "247028011848",
  appId: "1:247028011848:web:95160794d422922e4c197d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

