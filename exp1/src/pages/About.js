// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

const About = () => (
  <AboutContainer>
    <h2>About Diet Recommendation System</h2>
    <p>
      This system is designed to provide diet recommendations tailored to each individual based on their age, weight, height, and personal goals.
      By following the recommendations, you can work towards achieving a healthier lifestyle.
    </p>
  </AboutContainer>
);

export default About;
