import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBzDQ9VfPCXTv2qGhnRi_tt3Gzn7XtBdJM",
    authDomain: "coder-ecommerceiv.firebaseapp.com",
    projectId: "coder-ecommerceiv",
    storageBucket: "coder-ecommerceiv.appspot.com",
    messagingSenderId: "1030758641377",
    appId: "1:1030758641377:web:36f3cd331fd9b78aa691a0",
});
export const getFirebase = () => {
    return app;
};
export const getFirestore = () => {
    return firebase.firestore(app);
};
