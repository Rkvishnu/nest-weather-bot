 import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminPanel/AdminDashboard';
import UserManagement from './components/AdminPanel/UserManagement';
import BotSettings from './components/AdminPanel/BotSettings';

function AdminPanel() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" exact component={AdminDashboard} />
        <Route path="/admin/users" component={UserManagement} />
        <Route path="/admin/bot-settings" component={BotSettings} />
      </Routes>
    </Router>
  );
}

export default AdminPanel;
