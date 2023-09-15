// src/components/UserProfile/UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    username: '',
    email: '',
    // Add more profile properties as needed
  });

  useEffect(() => {
    // Fetch user profile data from the backend API
    axios.get('/api/user/profile')
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user profile data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {userProfile.username}</p>
      <p>Email: {userProfile.email}</p>
      {/* Display other profile properties */}
    </div>
  );
};

export default UserProfile;
