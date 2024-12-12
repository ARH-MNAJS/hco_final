// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAEwWE59XHBhK9YuRODKlSAirVb_t2xPt8",
  authDomain: "hawking-83f70.firebaseapp.com",
  projectId: "hawking-83f70",
  storageBucket: "hawking-83f70.firebasestorage.app",
  messagingSenderId: "14755982503",
  appId: "1:14755982503:web:eaf719513f3c09ca35bf82"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth instance
const auth = getAuth(app);

export { auth };
