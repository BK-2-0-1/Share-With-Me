import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
