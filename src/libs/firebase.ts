import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: process.env.APP_FIREBASE_APIKEY,
  authDomain: process.env.APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.APP_FIREBASE_PROJECTID,
  storageBucket: process.env.APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.APP_FIREBASE_APPID
};

const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)