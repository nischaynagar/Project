import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC8Bk_srQF6-cpdews7_OPhE9lIYmjMqvY",
    authDomain: "project5-e2264.firebaseapp.com",
    databaseURL: "https://project5-e2264-default-rtdb.firebaseio.com",
    projectId: "project5-e2264",
    storageBucket: "project5-e2264.appspot.com",
    messagingSenderId: "424059128465",
    appId: "1:424059128465:web:595fad9553ae37b3854d30",
    measurementId: "G-R5ERT7WVB0"
  };

  const fbApp = firebase.initializeApp(firebaseConfig);

  const db1 = fbApp.firestore();
  const db = firebase.database();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage ,db1};