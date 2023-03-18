import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDrByiIa5f-hr7-wHU_xTGrCBHMnB1EbqE",
  authDomain: "perez-propaganda-react.firebaseapp.com",
  projectId: "perez-propaganda-react",
  storageBucket: "perez-propaganda-react.appspot.com",
  messagingSenderId: "912142699603",
  appId: "1:912142699603:web:4872b6773f27d9656dcaa6",
  measurementId: "G-VJTCF9DSBE"
};
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
