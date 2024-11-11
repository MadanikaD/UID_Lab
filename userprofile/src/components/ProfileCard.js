// src/components/ProfileCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const UserName = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

const Age = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 0.5rem;
`;

const ProfileCard = ({ name, bio, age }) => (
  <CardContainer>
    <UserName>{name}</UserName>
    <Age>Age: {age}</Age>
    <Bio>{bio}</Bio>
  </CardContainer>
);

export default ProfileCard;
