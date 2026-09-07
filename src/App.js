
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      quantity: 1
    },
    {
      id: 2,
      name: "Headphones",
      price: 2000,
      quantity: 1
    },
    {
      id: 3,
      name: "Mouse",
      price: 800,
      quantity: 1
    }
  ]);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
      ))}
      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default App;
