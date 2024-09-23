import { auth } from "../client";
import { signInWithEmailAndPassword } from "firebase/auth";

let email = "test@test.com";
let password = "test1234";
let errorMessage = "";

export const handleLogin = async () => {
  if (!email || !password) {
    errorMessage = "Email and password are required!";
    return;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("User signed in successfully:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error);
    errorMessage = error.message;
  }
};
