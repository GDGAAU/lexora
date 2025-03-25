// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDigZBElUZXUkzBjqD0BYqbKjL7GLt3AZ8",
  authDomain: "lexora-eb209.firebaseapp.com",
  projectId: "lexora-eb209",
  storageBucket: "lexora-eb209.firebasestorage.app",
  messagingSenderId: "466932337778",
  appId: "1:466932337778:web:c2fe5d69db9bd56acd06eb",
  measurementId: "G-KSWRYFJZT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);