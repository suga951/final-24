import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "final-24-562a6.firebaseapp.com",
  projectId: "mfinal-24-562a6",
  storageBucket: "final-24-562a6",
  messagingSenderId: "822145740721",
  appId: "1:822145740721:web:922f2c22f78e67daa39790",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
  try{
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("User info: ", user);
  } catch(error){
    console.error("Error during sign-in: ", error);
  }
};

export { auth, provider, signInWithGoogle}


