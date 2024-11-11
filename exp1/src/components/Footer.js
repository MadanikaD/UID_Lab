// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    © 2024 Diet Recommendation System
  </FooterContainer>
);

export default Footer;
