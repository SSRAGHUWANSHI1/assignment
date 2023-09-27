import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('user'); // Default to 'user'

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic here, e.g., send a request to your backend
    console.log('User ID:', userId);
    console.log('Password:', password);
    console.log('User Role:', userRole);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={handleUserIdChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>User Role:</label>
          <div>
            <input
              type="radio"
              id="userRoleUser"
              value="user"
              checked={userRole === 'user'}
              onChange={handleUserRoleChange}
            />
            <label htmlFor="userRoleUser">User</label>
          </div>
          <div>
            <input
              type="radio"
              id="userRoleSuperAdmin"
              value="superadmin"
              checked={userRole === 'superadmin'}
              onChange={handleUserRoleChange}
            />
            <label htmlFor="userRoleSuperAdmin">Super Admin</label>
          </div>
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
