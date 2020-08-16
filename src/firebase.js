import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEk5Rt9vj1ArIWHc9BSDLJMBpYRDHr5sY",
    authDomain: "matchmaker-40f76.firebaseapp.com",
    databaseURL: "https://matchmaker-40f76.firebaseio.com",
    projectId: "matchmaker-40f76",
    storageBucket: "matchmaker-40f76.appspot.com",
    messagingSenderId: "116576120026",
    appId: "1:116576120026:web:87ef88edbae92c43e709e3",
    measurementId: "G-BPPSNPW4GB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;