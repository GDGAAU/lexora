// Import Firebase in compatibility mode
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDigZBElUZXUkzBjqD0BYqbKjL7GLt3AZ8",
  authDomain: "lexora-eb209.firebaseapp.com",
  projectId: "lexora-eb209",
  storageBucket: "lexora-eb209.appspot.com",
  messagingSenderId: "466932337778",
  appId: "1:466932337778:web:c2fe5d69db9bd56acd06eb",
  measurementId: "G-KSWRYFJZT8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
