// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGfo5u1vKhvM9-uVW8zsH3dTrn0XpsCoU",
  authDomain: "gaktoofocus.firebaseapp.com",
  projectId: "gaktoofocus",
  storageBucket: "gaktoofocus.appspot.com",
  messagingSenderId: "153344813387",
  appId: "1:153344813387:web:4656c1f272bc13d83ba0ce",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

// takes the data from authentication service and stores it in fireestore
export const createUserDocumentFromAuth = async (userAuth) => {
  // check for existing doc reference
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message, error);
    }
  }
  return userDocRef;
};
