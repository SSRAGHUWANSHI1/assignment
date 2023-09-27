import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  // Simulated state for companies (replace with actual data fetching)
  const [companies, setCompanies] = useState([]);
  const [newCompanyName, setNewCompanyName] = useState('');

  // Simulated state for Company Admin Users (replace with actual data fetching)
  const [companyAdmins, setCompanyAdmins] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [newAdminName, setNewAdminName] = useState('');

  useEffect(() => {
    // Simulated data (replace with actual data fetching)
    const sampleCompanies = [
      { id: 1, name: 'Company A' },
      { id: 2, name: 'Company B' },
    ];
    const sampleAdmins = [
      { id: 1, name: 'Admin 1', companyId: 1 },
      { id: 2, name: 'Admin 2', companyId: 2 },
    ];

    setCompanies(sampleCompanies);
    setCompanyAdmins(sampleAdmins);
  }, []);

  // Function to create a new company
  const createCompany = () => {
    // Simulated data (replace with actual data handling)
    const newCompany = { id: companies.length + 1, name: newCompanyName };
    setCompanies([...companies, newCompany]);
    setNewCompanyName('');
  };

  // Function to add a new Company Admin User
  const addCompanyAdmin = () => {
    // Simulated data (replace with actual data handling)
    const newAdmin = {
      id: companyAdmins.length + 1,
      name: newAdminName,
      companyId: selectedCompany,
    };
    setCompanyAdmins([...companyAdmins, newAdmin]);
    setNewAdminName('');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Create New Company */}
      <section>
        <h3>Create New Company</h3>
        <input
          type="text"
          placeholder="Company Name"
          value={newCompanyName}
          onChange={(e) => setNewCompanyName(e.target.value)}
        />
        <button onClick={createCompany}>Create</button>
      </section>

      {/* Company List */}
      <section>
        <h3>Company List</h3>
        <ul>
          {companies.map((company) => (
            <li key={company.id}>{company.name}</li>
          ))}
        </ul>
      </section>

      {/* Add Company Admin User */}
      <section>
        <h3>Add Company Admin User</h3>
        <select
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
        <input
          type="text"
          placeholder="Admin Name"
          value={newAdminName}
          onChange={(e) => setNewAdminName(e.target.value)}
        />
        <button onClick={addCompanyAdmin}>Add Admin</button>
      </section>

      {/* Company Admin List */}
      <section>
        <h3>Company Admin List</h3>
        <ul>
          {companyAdmins.map((admin) => (
            <li key={admin.id}>
              {admin.name} (Company: {companies.find((c) => c.id === admin.companyId)?.name})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminDashboard;
