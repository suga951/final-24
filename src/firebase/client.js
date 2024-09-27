import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyCOgOpBsbTC9cyLr4fWx2Rfgxbg_RxSNic",
  authDomain: "final-24-562a6.firebaseapp.com",
  projectId: "mfinal-24-562a6",
  storageBucket: "final-24-562a6",
  messagingSenderId: "822145740721",
  appId: "1:822145740721:web:922f2c22f78e67daa39790",
};

export const app = initializeApp(firebaseConfig);

=======
  apiKey: "AIzaSyBZ4kC0TGy5x0SFBa50b4E6otW-fEnVRfw",
  authDomain: "test-9d3b7.firebaseapp.com",
  projectId: "test-9d3b7",
  storageBucket: "test-9d3b7.appspot.com",
  messagingSenderId: "462940213642",
  appId: "1:462940213642:web:55996e49c0b815711f3873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
>>>>>>> arsabot-rs
