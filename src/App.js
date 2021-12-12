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

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function ChatRoom() {
}

export default App;