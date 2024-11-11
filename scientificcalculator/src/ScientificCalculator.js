import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 12px;
  background-color: #282c34;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Display = styled.input`
  width: 100%;
  height: 50px;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  text-align: right;
  background-color: #20232a;
  border: none;
  color: white;
  border-radius: 8px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #61dafb;
  color: #282c34;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #21a1f1;
  }
`;

const ScientificCalculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <Container>
      <h2>Scientific Calculator</h2>
      <Display type="text" value={input} readOnly />
      <ButtonGrid>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((char) => (
          <Button key={char} onClick={() => handleButtonClick(char)}>
            {char}
          </Button>
        ))}
        {['C', 'DEL', 'sin', 'cos', 'tan', 'log', '√', '^'].map((char) => (
          <Button key={char} onClick={() => handleButtonClick(char)}>
            {char}
          </Button>
        ))}
      </ButtonGrid>
    </Container>
  );
};

export default ScientificCalculator;
