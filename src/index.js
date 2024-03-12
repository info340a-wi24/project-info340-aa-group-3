import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getDatabase } from "firesbase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6WdvBobFTQqwc-gPMB_TaecOIx9LE22U",
  authDomain: "protests-hub.firebaseapp.com",
  projectId: "protests-hub",
  storageBucket: "protests-hub.appspot.com",
  messagingSenderId: "787448810940",
  appId: "1:787448810940:web:32e7a0361daad1c5ca2fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getDatabase();
// const reference = ref(db, )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);
