
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMwSnrJz3hFAltrghH-92NPsw-6dYc9ZA",
  authDomain: "source-election-project-bb048.firebaseapp.com",
  projectId: "source-election-project-bb048",
  storageBucket: "source-election-project-bb048.appspot.com",
  messagingSenderId: "326358870331",
  appId: "1:326358870331:web:5ad72cd49d74ddb5dc2f1e",
  measurementId: "G-7ZBZ839XQG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
