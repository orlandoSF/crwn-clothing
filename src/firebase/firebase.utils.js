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

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists)
  {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(
        {
          displayName,
          email,
          createdAt,
          ...additionalData
        }
      )
    }
    catch(error){
      console.log('error creating user',error.message);
    }
  }
  return userRef;
};



firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;