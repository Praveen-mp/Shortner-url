import React, { useState } from 'react';
import GoogleAuth from './components/Google-Auth';
import UrlShortenerForm from './components/UrlShortenerForm';
import Analytics from './components/Analytics';
import Navbar from './components/NavBar';
import '../../url-shortener-frontend/src/App.css';

const App = () => {
  const [authToken, setAuthToken] = useState(null);

  return (
    <div>
      <Navbar />
      {!authToken ? (
        <GoogleAuth setAuthToken={setAuthToken} />
      ) : (
        <div>
          <UrlShortenerForm authToken={authToken} />
          <Analytics authToken={authToken} />
        </div>
      )}
    </div>
  );
};

export default App;
