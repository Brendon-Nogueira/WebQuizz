import { initializeApp } from 'firebase/app';
import { getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDmVQIAUVCGiOVeKV2fOaJw7uqUgfeIZH4",
  authDomain: "webquizz-tcc.firebaseapp.com",
  projectId: "webquizz-tcc",
  storageBucket: "webquizz-tcc.appspot.com",
  messagingSenderId: "914894358067",
  appId: "1:914894358067:web:c20d680b9cd5cd093f4546",
  measurementId: "G-115P38V94L"
};

// Initialize 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db, analytics};