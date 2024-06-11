

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVk43re1rzL-JhgPKj7FzzxJH-7KG5QkI",
  authDomain: "synced-in.firebaseapp.com",
  projectId: "synced-in",
  storageBucket: "synced-in.appspot.com",
  messagingSenderId: "612023816694",
  appId: "1:612023816694:web:c227963e85f65fe0fd77d7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;