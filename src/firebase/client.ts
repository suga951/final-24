import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ4kC0TGy5x0SFBa50b4E6otW-fEnVRfw",
  authDomain: "my-auth-domain",
  projectId: "test-9d3b7"
 
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);