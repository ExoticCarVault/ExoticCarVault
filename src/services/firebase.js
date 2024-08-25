import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4vGrK5mCDM9nU60g2nxroGZZ_1tG0w8o",
  authDomain: "turma-64015-3576b.firebaseapp.com",
  projectId: "turma-64015-3576b",
  storageBucket: "turma-64015-3576b.appspot.com",
  messagingSenderId: "1042299161046",
  appId: "1:1042299161046:web:506ca02ca18a424efbfc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

console.log('firebase')