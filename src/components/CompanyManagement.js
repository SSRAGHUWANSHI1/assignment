import React, { useState } from 'react';

function CompanyManagement() {
  // Sample state for managing companies
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
  ]);

  // Function to create a new company
  const createCompany = (name) => {
    const newCompany = {
      id: companies.length + 1,
      name,
    };

    setCompanies([...companies, newCompany]);
  };

  return (
    <div>
      <h2>Company Management</h2>

      {/* List of Companies */}
      <section>
        <h3>Companies</h3>
        <ul>
          {companies.map((company) => (
            <li key={company.id}>{company.name}</li>
          ))}
        </ul>
      </section>

      {/* Create New Company */}
      <section>
        <h3>Create New Company</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const companyName = e.target.companyName.value;
            if (companyName) {
              createCompany(companyName);
              e.target.companyName.value = '';
            }
          }}
        >
          <input type="text" name="companyName" placeholder="Company Name" />
          <button type="submit">Create</button>
        </form>
      </section>
    </div>
  );
}

export default CompanyManagement;
