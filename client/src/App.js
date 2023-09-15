 // App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import UserProfile from './components/UserProfile/UserProfile';
import ChangePassword from './components/UserProfile/ChangePassword';
import AdminDashboard from './components/AdminPanel/AdminDashboard';
import UserManagement from './components/AdminPanel/UserManagement';
import BotSettings from './components/AdminPanel/BotSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/profile/change-password" component={ChangePassword} />
        <Route path="/admin" exact component={AdminDashboard} />
        <Route path="/admin/users" component={UserManagement} />
        <Route path="/admin/bot-settings" component={BotSettings} />
      </Routes>
    </Router>
  );
}

export default App;
