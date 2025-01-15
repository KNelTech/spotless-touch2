import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import App from './App';
import './index.css';

// const RECAPTCHA_SITE_KEY = "6LclmLUqAAAAAP4DC3Ru-GJJLQ2So3NRVKAq6Sai";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
