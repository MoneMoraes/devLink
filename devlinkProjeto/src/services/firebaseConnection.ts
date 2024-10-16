import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYxNudak_pzWcIgu_c57xoaG9AFdVXL2w",
  authDomain: "devlinks-7e162.firebaseapp.com",
  projectId: "devlinks-7e162",
  storageBucket: "devlinks-7e162.appspot.com",
  messagingSenderId: "482060077416",
  appId: "1:482060077416:web:06dee90b39ca1012ae2edd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth, db};