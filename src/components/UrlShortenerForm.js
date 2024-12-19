import React, { useState } from 'react';
import { createShortUrl } from '../api';

const UrlShortenerForm = ({ authToken }) => {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [topic, setTopic] = useState('');
  const [shortUrl, setShortUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createShortUrl(authToken, { longUrl, customAlias, topic });
      setShortUrl(data.shortUrl);
      alert('Short URL Created!');
    } catch (err) {
      console.error('Error creating short URL:', err);
      alert('Failed to create short URL. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Short URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Custom Alias (optional)"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
        />
        <input
          type="text"
          placeholder="Topic (optional)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
        </div>
      )}
    </div>
  );
};

export default UrlShortenerForm;
