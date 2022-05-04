import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqcv0ZLOCI6FDUaMZsYv4DhzXN7PBTDgE",
  authDomain: "spectagram-app-98052.firebaseapp.com",
  projectId: "spectagram-app-98052",
  storageBucket: "spectagram-app-98052.appspot.com",
  messagingSenderId: "67851219755",
  appId: "1:67851219755:web:ab081d65152f2d3be98b6e"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database();