import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCmHUCgkX-PYLaURawlArpFjfsQ4uEsJ_8",
  authDomain: "source-election-system-63d0f.firebaseapp.com",
  projectId: "source-election-system-63d0f",
  storageBucket: "source-election-system-63d0f.appspot.com",
  messagingSenderId: "756352571339",
  appId: "1:756352571339:web:f34cd32d9263096346084e",
  measurementId: "G-PVZEHGZ6DX"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
