import React, { useState, useEffect } from 'react';

function CompanyDashboard() {
  // Simulated state for company-specific data (replace with actual data fetching)
  const [companyData, setCompanyData] = useState({
    name: 'Company A',
    contentVisibility: 'public',
    employees: [],
    content: [],
  });

  // State for managing form inputs
  const [newContent, setNewContent] = useState('');
  const [newEmployee, setNewEmployee] = useState('');

  useEffect(() => {
    // Simulated data (replace with actual data fetching)
    const sampleCompanyData = {
      name: 'Company A',
      contentVisibility: 'public',
      employees: ['Employee 1', 'Employee 2'],
      content: [
        { id: 1, type: 'blog', text: 'Blog Post 1' },
        { id: 2, type: 'picture', text: 'Picture 1' },
      ],
    };
    setCompanyData(sampleCompanyData);
  }, []);

  // Function to create new content
  const createContent = () => {
    // Simulated data (replace with actual data handling)
    const newContentItem = {
      id: companyData.content.length + 1,
      type: 'blog', // Replace with actual content type selection
      text: newContent,
    };
    setCompanyData({
      ...companyData,
      content: [...companyData.content, newContentItem],
    });
    setNewContent('');
  };

  // Function to create a new employee
  const createEmployee = () => {
    // Simulated data (replace with actual data handling)
    const newEmployeeName = newEmployee;
    setCompanyData({
      ...companyData,
      employees: [...companyData.employees, newEmployeeName],
    });
    setNewEmployee('');
  };

  // Function to toggle content visibility
  const toggleContentVisibility = () => {
    // Simulated data (replace with actual data handling)
    const newVisibility =
      companyData.contentVisibility === 'public' ? 'company-only' : 'public';
    setCompanyData({
      ...companyData,
      contentVisibility: newVisibility,
    });
  };

  return (
    <div>
      <h2>Company Dashboard</h2>
      <h3>{companyData.name}</h3>

      {/* Content Creation */}
      <section>
        <h3>Create Content</h3>
        <input
          type="text"
          placeholder="Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button onClick={createContent}>Create</button>
      </section>

      {/* Employee Management */}
      <section>
        <h3>Employee Management</h3>
        <input
          type="text"
          placeholder="Employee Name"
          value={newEmployee}
          onChange={(e) => setNewEmployee(e.target.value)}
        />
        <button onClick={createEmployee}>Add Employee</button>
        <ul>
          {companyData.employees.map((employee, index) => (
            <li key={index}>{employee}</li>
          ))}
        </ul>
      </section>

      {/* Content Visibility */}
      <section>
        <h3>Content Visibility</h3>
        <p>Current Visibility: {companyData.contentVisibility}</p>
        <button onClick={toggleContentVisibility}>
          Toggle Content Visibility
        </button>
      </section>

      {/* Content Display */}
      <section>
        <h3>Content</h3>
        <ul>
          {companyData.content.map((contentItem) => (
            <li key={contentItem.id}>
              {contentItem.type}: {contentItem.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CompanyDashboard;
