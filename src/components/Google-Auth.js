import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { googleSignIn } from '../api';

const GoogleAuth = ({ setAuthToken }) => {
  const onSuccess = async (response) => {
    try {
      const data = await googleSignIn(response.tokenId);
      setAuthToken(data.authToken);
      alert('Login Successful!');
    } catch (err) {
      console.error('Login Failed:', err);
      alert('Login Failed. Please try again.');
    }
  };

  const onFailure = (error) => {
    console.error('Google Sign-In Error:', error);
    alert('Google Sign-In failed.');
  };

  return (
    <div>
      <GoogleLogin
        clientId="<YOUR_GOOGLE_CLIENT_ID>"
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleAuth;
