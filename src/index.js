import React from 'react';
import ReactDOM from 'react-dom/client';
import "./cssReset.css"
import App from './App';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// Coded by Mohammad Gholami
// Email : mohammad.mgs.98@gmail.com
// TelegramID : @m155680