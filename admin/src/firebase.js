import firebase from "firebase/app";

import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCMfyTTTwYWVq924MegKD17zyGj5a8YWMc",
  
    authDomain: "netflix-cc03c.firebaseapp.com",
  
    projectId: "netflix-cc03c",
  
    storageBucket: "netflix-cc03c.appspot.com",
  
    messagingSenderId: "80726744185",
  
    appId: "1:80726744185:web:7dd1cdf9f20410768c08a8",
  
    measurementId: "G-WKGMNDRME3"
  
  };


const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
  
  

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();


export default storage;