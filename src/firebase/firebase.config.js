import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfhlOzlAkn9WS6Tv2yPLhBbz7mnebIw4c",
  authDomain: "coffee-shop-4ccc0.firebaseapp.com",
  projectId: "coffee-shop-4ccc0",
  storageBucket: "coffee-shop-4ccc0.appspot.com",
  messagingSenderId: "650330361217",
  appId: "1:650330361217:web:64824c679c739b26bb2c80",
  measurementId: "G-98FK6ETKWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;