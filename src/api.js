import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Replace with your backend URL

export const googleSignIn = async (token) => {
  const response = await axios.post(`${API_BASE_URL}/auth/google-signin`, { token });
  return response.data;
};

export const createShortUrl = async (authToken, data) => {
  const response = await axios.post(`${API_BASE_URL}/shorten`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};

export const getUrlAnalytics = async (authToken, alias) => {
  const response = await axios.get(`${API_BASE_URL}/analytics/${alias}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data;
};
