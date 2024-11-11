// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const CountDisplay = styled.h2`
  font-size: 2rem;
  color: #4caf50;
  margin: 20px 0;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #45a049;
  }
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 5px;
  margin-top: 15px;
  text-align: center;
  width: 60px;
`;

function App() {
  const [count, setCount] = useState(0); // Initial count value
  const [step, setStep] = useState(1);   // Initial step value

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  

  return (
    <Container>
      <h1>Counter Application</h1>
      <CountDisplay>{count}</CountDisplay>
      <div>
        <Button onClick={handleDecrement}>- Decrement</Button>
        <Button onClick={handleIncrement}>+ Increment</Button>
      </div>
      
    </Container>
  );
}

export default App;
