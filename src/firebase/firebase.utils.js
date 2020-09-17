import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmLFKdtp1YOXlEWFVvac30pPNJEyjPFgs',
  authDomain: 'clothing-db-d11d7.firebaseapp.com',
  databaseURL: 'https://clothing-db-d11d7.firebaseio.com',
  projectId: 'clothing-db-d11d7',
  storageBucket: 'clothing-db-d11d7.appspot.com',
  messagingSenderId: '868401213698',
  appId: '1:868401213698:web:1bf8adb8763ea06337121b',
  measurementId: 'G-36DRDR6TPE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
