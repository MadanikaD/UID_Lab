// src/components/DietForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const DietForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ age: '', weight: '', height: '', goal: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <Input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <Input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
        <Input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} required />
        <Input type="text" name="goal" placeholder="Goal (e.g., Lose Weight)" onChange={handleChange} required />
        <Button type="submit">Get Recommendations</Button>
      </form>
    </FormContainer>
  );
};

export default DietForm;
