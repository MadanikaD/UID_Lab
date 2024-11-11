import React, { useState } from 'react';

// ItemForm Component
const ItemForm = ({ onAddItem }) => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name && item.description && item.quantity > 0) {
      onAddItem(item);
      setItem({ name: '', description: '', quantity: 1 });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Description:
        <input
          type="text"
          name="description"
          value={item.description}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </label>
      <label style={labelStyle}>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          min="1"
          style={inputStyle}
        />
      </label>
      <button type="submit" style={buttonStyle}>Add Item</button>
    </form>
  );
};

// Main App Component
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div style={appStyle}>
      <h1>Diet Recommendation System</h1>
      <ItemForm onAddItem={addItem} />
      <ul style={listStyle}>
        {items.map((item, index) => (
          <li key={index} style={itemStyle}>
            <strong>{item.name}</strong> - {item.description} (Qty: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles for Simplicity
const appStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '500px',
  margin: '0 auto',
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f9',
  borderRadius: '8px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '20px'
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  fontSize: '16px'
};

const inputStyle = {
  padding: '8px',
  fontSize: '14px',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 15px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#28a745',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0
};

const itemStyle = {
  fontSize: '16px',
  margin: '10px 0',
  padding: '10px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

export default App;
