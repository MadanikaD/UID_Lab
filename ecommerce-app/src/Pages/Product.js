import React, { useState } from "react";
import "./Product.css"; 

function Products({ addToCart }) {
  const productList = [
    { id: 1, name: "Pen", price: 10 },
    { id: 2, name: "NoteBook", price: 20 },
    { id: 3, name: "Choclate", price: 30 },
    { id: 4, name: "Ruler", price: 15 },
    { id: 5, name: "Ruled Paper", price: 30 },{ id: 6, name: "Unruled Paper", price: 1 },
  ];

  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setDisabledButtons((prev) => ({ ...prev, [product.id]: true })); // Disable button after click
    setTimeout(() => {
      setDisabledButtons((prev) => ({ ...prev, [product.id]: false })); // Re-enable after 1 second
    }, 1000);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyleType: "none"}}>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button
              onClick={() => handleAddToCart(product)}
              disabled={disabledButtons[product.id]}
            >
              {disabledButtons[product.id] ? "Adding..." : "Add to Cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
