// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #4caf50;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-around;
`;

const Header = () => (
  <Navbar>
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
    <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
  </Navbar>
);

export default Header;
