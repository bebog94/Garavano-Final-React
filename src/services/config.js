
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";





const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sicnet-4aae4.firebaseapp.com",
  projectId: "sicnet-4aae4",
  storageBucket: "sicnet-4aae4.appspot.com",
  messagingSenderId: "1012858770537",
  appId: "1:1012858770537:web:72da77b1d7c5aafbcabef8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);