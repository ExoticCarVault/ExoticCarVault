// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClrVId5fRjAKJcCt-shJTe95Nv0Q6Vu3c",
  authDomain: "aula--64015.firebaseapp.com",
  projectId: "aula--64015",
  storageBucket: "aula--64015.appspot.com",
  messagingSenderId: "302791460899",
  appId: "1:302791460899:web:008a812649e39c58040996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;