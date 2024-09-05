import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "final-24-562a6.firebaseapp.com",
  projectId: "mfinal-24-562a6",
  storageBucket: "final-24-562a6",
  messagingSenderId: "822145740721",
  appId: "1:822145740721:web:922f2c22f78e67daa39790",
};

export const app = initializeApp(firebaseConfig);


