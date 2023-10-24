// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE03Ngs--doDbvlcb7UHdmvnSAQS-stfY",
  authDomain: "task-list-24e26.firebaseapp.com",
  projectId: "task-list-24e26",
  storageBucket: "task-list-24e26.appspot.com",
  messagingSenderId: "179117040366",
  appId: "1:179117040366:web:e26f35333cd077738f49ff"
};

// const developmentFirebaseConfig = {
//   apiKey: "AIzaSyAIWlkvSQuVj5SKzWoDX7y0hMbpqnSM9SI",
//   authDomain: "dev-ob-tasklist-firebase.firebaseapp.com",
//   projectId: "dev-ob-tasklist-firebase",
//   storageBucket: "dev-ob-tasklist-firebase.appspot.com",
//   messagingSenderId: "321960608896",
//   appId: "1:321960608896:web:59d9cb7512a4f934f65265"
// };

// Initialize Firebase
// let app;
// if (process.env.NODE_ENV === 'production') {
let app = initializeApp(firebaseConfig);
// } else {
//   app = initializeApp(developmentFirebaseConfig);
// }

const db = getFirestore();

export { app, db }