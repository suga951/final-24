import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ4kC0TGy5x0SFBa50b4E6otW-fEnVRfw",
  authDomain: "test-9d3b7.firebaseapp.com",
  projectId: "test-9d3b7",
  storageBucket: "test-9d3b7.appspot.com",
  messagingSenderId: "462940213642",
  appId: "1:462940213642:web:55996e49c0b815711f3873"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);