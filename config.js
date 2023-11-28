import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOCeHaxdLVhG6-V1RbwiIX9LtGdH6mRPA",
    authDomain: "projeto-c63---davi-souza-627f9.firebaseapp.com",
    databaseURL: "https://projeto-c63---davi-souza-627f9-default-rtdb.firebaseio.com",
    projectId: "projeto-c63---davi-souza-627f9",
    storageBucket: "projeto-c63---davi-souza-627f9.appspot.com",
    messagingSenderId: "334059162326",
    appId: "1:334059162326:web:ef690434d9f2711b42d777",
    measurementId: "G-G8TVW1JQ95"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;