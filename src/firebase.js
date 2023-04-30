import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMf_QmNXE6hUc2fp1XhlZeEEvd5LcLhUs",
  authDomain: "wt-crud.firebaseapp.com",
  projectId: "wt-crud",
  storageBucket: "wt-crud.appspot.com",
  messagingSenderId: "694235279502",
  appId: "1:694235279502:web:aa426aff0a70bc1fd199df",
  measurementId: "G-021MGNWTVD"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);