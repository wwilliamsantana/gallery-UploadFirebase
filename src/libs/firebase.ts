import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "", //Preencha estes campos vazios com as informações do seu Storage!
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId:"",
  appId: ""
};


const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)