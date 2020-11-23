import firebase from 'firebase/app'
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvTV87zO-IaYj_lY722axlN1wG1rORzo4",
  authDomain: "bezkoder-firebase-34f94.firebaseapp.com",
  databaseURL: "https://bezkoder-firebase-34f94.firebaseio.com",
  projectId: "bezkoder-firebase-34f94",
  storageBucket: "bezkoder-firebase-34f94.appspot.com",
  messagingSenderId: "165824429089",
  appId: "1:165824429089:web:8fa383ad8ed223a0f07760",
  measurementId: "G-38F87S4Q0Q"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();