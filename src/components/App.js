import React from 'react';
import AdminDashboard from './AdminDashboard';
import CompanyDashboard from './CompanyDashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/company/:companyId" element={<CompanyDashboard />} />
        {/* <Route path="/" element={<LoginPage/> } /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Enterprise Social Platform</h1>
//       {/* Add content for the landing page */}
//     </div>
//   );
// }
export default App;
