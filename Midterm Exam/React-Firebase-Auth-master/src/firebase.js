import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCMwSnrJz3hFAltrghH-92NPsw-6dYc9ZA",
  authDomain: "source-election-project-bb048.firebaseapp.com",
  projectId: "source-election-project-bb048",
  storageBucket: "source-election-project-bb048.appspot.com",
  messagingSenderId: "326358870331",
  appId: "1:326358870331:web:5ad72cd49d74ddb5dc2f1e",
  measurementId: "G-7ZBZ839XQG"
})

export const auth = app.auth()
export default app
