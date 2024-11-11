// src/pages/Home.js
import React, { useState } from 'react';
import DietForm from '../components/DietForm';
import Recommendation from '../components/Recommendation';

const Home = () => {
  const [data, setData] = useState(null);

  const handleFormSubmit = (formData) => {
    setData(formData);
  };

  return (
    <div>
      <DietForm onSubmit={handleFormSubmit} />
      {data && <Recommendation data={data} />}
    </div>
  );
};

export default Home;
