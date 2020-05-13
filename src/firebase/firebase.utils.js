import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBkFu-1HmR3nbyKwYxLkCwCmZUAF_Nbekg",
    authDomain: "crwn-db-415f2.firebaseapp.com",
    databaseURL: "https://crwn-db-415f2.firebaseio.com",
    projectId: "crwn-db-415f2",
    storageBucket: "crwn-db-415f2.appspot.com",
    messagingSenderId: "685841957746",
    appId: "1:685841957746:web:136d85b197b4f317fe53eb",
    measurementId: "G-35J0LCFECV"
};

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;