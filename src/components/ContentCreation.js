import React, { useState, useEffect } from 'react';

function ContentCreation({ user, companies, onCreateContent }) {
  const [content, setContent] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [selectedCompany, setSelectedCompany] = useState('');

  // Simulated data for content types (replace with your actual content types)
  const contentTypes = ['blog', 'picture', 'video'];

  // Function to handle content creation
  const handleCreateContent = () => {
    // Check if content and visibility are provided
    if (content.trim() === '' || visibility === '' || (!user.isAdmin && selectedCompany === '')) {
      alert('Please fill in all fields.');
      return;
    }

    // Create a content object
    const newContent = {
      type: 'blog', // Replace with actual content type selection
      text: content,
      visibility: user.isAdmin ? visibility : 'company-only',
      companyId: user.isAdmin ? '' : selectedCompany,
      userId: user.id,
    };

    // Pass the new content to the parent component for handling
    onCreateContent(newContent);

    // Clear input fields
    setContent('');
    setVisibility('public');
    setSelectedCompany('');
  };

  return (
    <div>
      <h2>Create Content</h2>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          rows="4"
          cols="50"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="visibility">Visibility:</label>
        <select
          id="visibility"
          value={visibility}
          onChange={(e) => setVisibility(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="company-only">Company-Only</option>
          {user.isAdmin && <option value="private">Private</option>}
        </select>
      </div>
      {!user.isAdmin && (
        <div>
          <label htmlFor="company">Select Company:</label>
          <select
            id="company"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Select a Company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <button onClick={handleCreateContent}>Create</button>
    </div>
  );
}

export default ContentCreation;
