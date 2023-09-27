import React, { useEffect, useState } from 'react';
import ContentFeed from './ContentFeed';

function Home() {
  // State to store user information (you'll need to set this up)
  const [user, setUser] = useState(null);

  // State to store personalized content
  const [personalizedContent, setPersonalizedContent] = useState([]);

  // Simulated data for personalized content (replace with API fetch)
  const simulatedContent = [
    { id: 1, title: 'Blog Post 1', type: 'blog' },
    { id: 2, title: 'Picture 1', type: 'picture' },
    { id: 3, title: 'Video 1', type: 'video' },
  ];

  // Simulated user authentication (replace with your authentication logic)
  useEffect(() => {
    // Simulate user login
    setUser({ id: 1, username: 'john_doe' });
  }, []);

  // Simulate fetching personalized content based on user (replace with API fetch)
  useEffect(() => {
    if (user) {
      // Simulate fetching personalized content for the logged-in user
      setPersonalizedContent(simulatedContent);
    }
  }, [user]);

  return (
    <div>
      <h1>Welcome to the Enterprise Social Platform</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <ContentFeed content={personalizedContent} />
        </div>
      ) : (
        <p>Please log in to access personalized content.</p>
      )}
    </div>
  );
}

export default Home;
