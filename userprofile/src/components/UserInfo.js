// src/components/UserInfo.js
import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
`;

const InfoItem = styled.div`
  text-align: center;
`;

const InfoLabel = styled.p`
  color: #555;
  font-weight: bold;
`;

const InfoValue = styled.p`
  color: #333;
`;

const UserInfo = ({ age }) => (
  <InfoContainer>
    <InfoItem>
      <InfoLabel>Age</InfoLabel>
      <InfoValue>{age}</InfoValue>
    </InfoItem>
  </InfoContainer>
);

export default UserInfo;
