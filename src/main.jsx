import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TextProvider from './context/TextContext.jsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextProvider>
      <BrowserRouter>
      <ToastContainer/>
      <App />
      </BrowserRouter>
    </TextProvider>
  </React.StrictMode>,
)
