import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjdXQ6ZoUWiQx2UJ5Zi9kUFm43b_JavGI",
  authDomain: "rick-morty-backend.firebaseapp.com",
  projectId: "rick-morty-backend",
  storageBucket: "rick-morty-backend.appspot.com",
  messagingSenderId: "517717726108",
  appId: "1:517717726108:web:89fc197ac043301348ae59"
};

firebase.initializeApp(firebaseConfig);
export { firebase };