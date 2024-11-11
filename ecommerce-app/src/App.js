import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import Cart from "./Pages/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add products to the cart or update the quantity
  const addToCart = (product) => {
    console.log("Adding to cart:", product); // Log added product

    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        console.log("Product already in cart:", existingProduct); // Log existing product
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Update quantity
            : item
        );
      } else {
        console.log("Adding new product to cart"); // Log new addition
        return [...prevItems, { ...product, quantity: 1 }]; // Add new product with quantity 1
      }
    });
  };

  // Function to calculate the total price of the cart
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} totalPrice={getTotalPrice()} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
