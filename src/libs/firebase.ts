import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyDTK4HmWAc_Y0XZNnA8VYlHwLq8oiRwAjo",
  authDomain: "react-gallery-e4713.firebaseapp.com",
  projectId: "react-gallery-e4713",
  storageBucket: "react-gallery-e4713.appspot.com",
  messagingSenderId:"229574930059",
  appId: "1:229574930059:web:f8da3baebf454461f8ae8e"
};


const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)