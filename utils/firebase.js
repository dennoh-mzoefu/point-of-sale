// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB-0nGQzSC9KWM5qTdq61__PhXuYUSGyCQ",
  authDomain: "green-pastures-ce180.firebaseapp.com",
  projectId: "green-pastures-ce180",
  storageBucket: "green-pastures-ce180.appspot.com",
  messagingSenderId: "938714613984",
  appId: "1:938714613984:web:fd5fb551896ca2ed752885",
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result?.user?.uid);
      return result?.user?.uid;
    })
    .catch((error) => {
      console.log(error);
      //   return error;
    });
};
// getFirestore().settings({ experimentalForceLongPolling: true });
export const db = getFirestore(app);

// collection ref
export const colRef = collection(db, "menu");
export const ordersColRef = collection(db, "orders");
export const expenseColRef = collection(db, "expense");
export const stockColRef = collection(db, "stock");
export const userColRef = collection(db, "user");

export const salesColRef = collection(db, "sales");
// queries
// const q = query(colRef, where("author", "==", "patrick rothfuss"), orderBy('createdAt'))
export const q = query(colRef, where("name", "==", "chapati"));

// realtime collection data
export const storage = getStorage(app);

// single doc ref
