import React from "react";
import "./Cart.css";

function Cart({ cartItems, totalPrice }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity} = $
                {(item.price * item.quantity).toFixed(2)} {/* Displaying total for each item */}
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
