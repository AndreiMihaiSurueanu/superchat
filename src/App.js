import './App.css';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDxxfzNzUWCofWqjv2Qg2Vbwi7-jsoLzAA",
  authDomain: "react-projects-9.firebaseapp.com",
  projectId: "react-projects-9",
  storageBucket: "react-projects-9.appspot.com",
  messagingSenderId: "891378795148",
  appId: "1:891378795148:web:9565f42c72483b1f27f1a9"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
