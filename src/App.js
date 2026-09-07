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

  // TODO:
  // Display cart products using map()
  // Implement increase quantity
  // Implement decrease quantity
  // Calculate total amount

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* Students implement the cart here */}

    </div>
  );
}

export default App;
