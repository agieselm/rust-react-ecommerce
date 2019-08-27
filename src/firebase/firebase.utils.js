import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQLtpj1gdj3UlHfdWZDB2zz0wwUnwdIcA",
    authDomain: "rust-ecommerce-db.firebaseapp.com",
    databaseURL: "https://rust-ecommerce-db.firebaseio.com",
    projectId: "rust-ecommerce-db",
    storageBucket: "",
    messagingSenderId: "334854661882",
    appId: "1:334854661882:web:e7d963f24f0f560d"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
