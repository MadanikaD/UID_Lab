// src/components/ProfileStats.js
import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #e7f1f5;
  border-radius: 12px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  color: #4caf50;
  margin: 0;
`;

const StatLabel = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

const ProfileStats = ({ stats }) => (
  <StatsContainer>
    <StatItem>
      <StatNumber>{stats.followers}</StatNumber>
      <StatLabel>Followers</StatLabel>
    </StatItem>
    <StatItem>
      <StatNumber>{stats.following}</StatNumber>
      <StatLabel>Following</StatLabel>
    </StatItem>
    <StatItem>
      <StatNumber>{stats.posts}</StatNumber>
      <StatLabel>Posts</StatLabel>
    </StatItem>
  </StatsContainer>
);

export default ProfileStats;
