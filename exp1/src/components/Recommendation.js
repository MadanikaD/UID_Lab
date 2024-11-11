// src/components/Recommendation.js
import React from 'react';
import styled from 'styled-components';

const RecommendationContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Recommendation = ({ data }) => (
  <RecommendationContainer>
    <h2>Recommended Diet Plan</h2>
    <p>Age: {data.age}</p>
    <p>Weight: {data.weight} kg</p>
    <p>Height: {data.height} cm</p>
    <p>Goal: {data.goal}</p>
    <h3>Suggestions</h3>
    <ul>
      <li>Eat more vegetables and fruits.</li>
      <li>Include lean proteins in every meal.</li>
      <li>Drink at least 2 liters of water daily.</li>
      {/* Add more personalized recommendations based on goal */}
    </ul>
  </RecommendationContainer>
);

export default Recommendation;
