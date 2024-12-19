import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="<737725335197-7pu0j5hb1jefta2mvt4ariboc2grddco>">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
