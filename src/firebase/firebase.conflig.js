// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWAbXyBBMVO6XCaVSRVyGUH8XMYgkZbsQ",
  authDomain: "the-dragon-news-1d74f.firebaseapp.com",
  projectId: "the-dragon-news-1d74f",
  storageBucket: "the-dragon-news-1d74f.appspot.com",
  messagingSenderId: "619431846496",
  appId: "1:619431846496:web:f60cdb93a46bcd5138d905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;