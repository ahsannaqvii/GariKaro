import { getAuth } from "firebase/auth";

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA7BeD7gS41GuOP_wLjg5vBWREdlVepUJ0",

    authDomain: "garikaro-signin.firebaseapp.com",
  
    projectId: "garikaro-signin",
  
    storageBucket: "garikaro-signin.appspot.com",
  
    messagingSenderId: "71022866784",
  
    appId: "1:71022866784:web:e6455142e82a5681806e05"
  
  };
  
  const app = initializeApp(firebaseConfig);    
  export const authentication=getAuth(app);