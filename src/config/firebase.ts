import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_URL,
  authDomain: process.env.VITE_API_AUTH_DOMAIN,
  projectId: process.env.VITE_API_PROJECT_ID,
  storageBucket: process.env.VITE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_API_MESSAGING_SENDER_ID,
  appId: process.env.VITE_API_APP_ID
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);