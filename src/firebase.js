import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyBzDQ9VfPCXTv2qGhnRi_tt3Gzn7XtBdJM",
    authDomain: "coder-ecommerceiv.firebaseapp.com",
    projectId: "coder-ecommerceiv",
    storageBucket: "coder-ecommerceiv.appspot.com",
    messagingSenderId: "1030758641377",
    appId: "1:1030758641377:web:36f3cd331fd9b78aa691a0"
  };
const app =initializeApp(firebaseConfig);

export const db = getFirestore(app);