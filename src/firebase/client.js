import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "final-24-562a6.firebaseapp.com",
  projectId: "mfinal-24-562a6",
  storageBucket: "final-24-562a6",
  messagingSenderId: "822145740721",
  appId: "1:822145740721:web:922f2c22f78e67daa39790",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
