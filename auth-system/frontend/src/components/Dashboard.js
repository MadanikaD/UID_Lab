import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard">
      <h2>Welcome, {user.username}!</h2>
      <p>This is your dashboard, only accessible if you're logged in.</p>
    </div>
  );
};

export default Dashboard;
