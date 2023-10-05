import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';  
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
);


AOS.init();