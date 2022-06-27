import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig ={
  apiKey: "AIzaSyA2odSkIqGy5OGS-t8Y7xG99_98h2Jcc6c",
  authDomain: "twitter-clone-f08f9.firebaseapp.com",
  projectId: "twitter-clone-f08f9",
  storageBucket: "twitter-clone-f08f9.appspot.com",
  messagingSenderId: "155246828895",
  appId: "1:155246828895:web:5fb60387ae7de7d21aeaea"
}


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;