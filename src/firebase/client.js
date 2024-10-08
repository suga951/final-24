import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBZ4kC0TGy5x0SFBa50b4E6otW-fEnVRfw",
  authDomain: "test-9d3b7.firebaseapp.com",
  projectId: "test-9d3b7",
  storageBucket: "test-9d3b7.appspot.com",
  messagingSenderId: "462940213642",
  appId: "1:462940213642:web:55996e49c0b815711f3873",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { db, auth, app };

