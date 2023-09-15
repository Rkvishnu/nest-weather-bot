 import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotSettings = () => {
  const [botSettings, setBotSettings] = useState({
    apiKey: '',
    defaultCity: '',
  });

  useEffect(() => {
    // Fetch bot settings from the backend API
    axios.get('/api/admin/bot-settings')
      .then((response) => {
        setBotSettings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bot settings:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBotSettings({
      ...botSettings,
      [name]: value,
    });
  };

  const handleSaveSettings = () => {
    // Send updated bot settings to the backend for saving
    axios.put('/api/admin/bot-settings', botSettings)
      .then((response) => {
        console.log('Bot settings updated:', response.data);
        // You can add success feedback to the user here
      })
      .catch((error) => {
        console.error('Error updating bot settings:', error);
        // You can add error handling and feedback to the user here
      });
  };

  return (
    <div>
      <h1>Bot Settings</h1>
      <div>
        <label htmlFor="apiKey">API Key:</label>
        <input
          type="text"
          id="apiKey"
          name="apiKey"
          value={botSettings.apiKey}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="defaultCity">Default City:</label>
        <input
          type="text"
          id="defaultCity"
          name="defaultCity"
          value={botSettings.defaultCity}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSaveSettings}>Save Settings</button>
    </div>
  );
};

export default BotSettings;
