import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAiGmu_Yrpg12evXh7Bh_Pm6HhVtZ4Ohl4",
  authDomain: "crwn-clothing-db-260f1.firebaseapp.com",
  projectId: "crwn-clothing-db-260f1",
  storageBucket: "crwn-clothing-db-260f1.appspot.com",
  messagingSenderId: "1024483927894",
  appId: "1:1024483927894:web:4ad10708c5c8b5b23898f7"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);