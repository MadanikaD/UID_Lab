// src/pages/Profile.js
import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileStats from '../components/ProfileStats';

// Define userData once at the top
const userData = {
  name: "Jane Doe",
  age: 28,
  bio: "A nutrition enthusiast and fitness lover. Here to share my journey towards a healthier lifestyle.",
  stats: {
    followers: 1200,
    following: 300,
    posts: 75,
  },
};

const Profile = () => (
  <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
    <ProfileCard
      name={userData.name}
      bio={userData.bio}
      age={userData.age}
    />
    <ProfileStats stats={userData.stats} />
  </div>
);

export default Profile;
