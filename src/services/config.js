import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

//NOTA PARA EL PROFE: AIzaSyBIDkV_WvJ8LnL-pwsAOF7gcUg3dHFAUjI
//SE DEJA EL API KEY COMENTADA PARA FINES DE REVISION

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aguasjotachile.firebaseapp.com",
  projectId: "aguasjotachile",
  storageBucket: "aguasjotachile.appspot.com",
  messagingSenderId: "587131586442",
  appId: "1:587131586442:web:6e465ba6a4c87aca6e2a73"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)