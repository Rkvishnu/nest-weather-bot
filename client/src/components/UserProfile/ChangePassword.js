// src/components/UserProfile/ChangePassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  an API request to change the password
    axios.post('/api/user/change-password', passwords)
      .then((response) => {
        console.log('Password changed successfully:', response.data);
       })
      .catch((error) => {
        console.error('Error changing password:', error);
       });
  };

  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
