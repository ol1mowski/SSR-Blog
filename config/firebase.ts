import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVvBrciSausyMnqOmNSYIdHJY-JLgRN-U",
  authDomain: "blog-26718.firebaseapp.com",
  projectId: "blog-26718",
  storageBucket: "blog-26718.appspot.com",
  messagingSenderId: "714914253359",
  appId: "1:714914253359:web:62144357772bfc2d1854da",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
