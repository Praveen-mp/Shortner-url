import React, { useState } from 'react';
import { getUrlAnalytics } from '../api';

const Analytics = ({ authToken }) => {
  const [alias, setAlias] = useState('');
  const [analytics, setAnalytics] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getUrlAnalytics(authToken, alias);
      setAnalytics(data);
    } catch (err) {
      console.error('Error fetching analytics:', err);
      alert('Failed to fetch analytics. Please try again.');
    }
  };

  return (
    <div>
      <h2>URL Analytics</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter short URL alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
        />
        <button type="submit">Get Analytics</button>
      </form>
      {analytics && (
        <div>
          <h3>Analytics for {alias}</h3>
          <p>Total Clicks: {analytics.totalClicks}</p>
          <p>Unique Clicks: {analytics.uniqueClicks}</p>
          <h4>Clicks by Date:</h4>
          <ul>
            {analytics.clicksByDate.map((item) => (
              <li key={item.date}>
                {item.date}: {item.clickCount} clicks
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Analytics;
