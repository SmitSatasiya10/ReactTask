import React, { useState } from 'react';

const CartQty_10 = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Pizza', quantity: 1 },
    { id: 2, name: 'Burger', quantity: 1 },
    { id: 3, name: 'Snaks', quantity: 1 },
  ]);

  const incrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-5 w-50">
      <h2>Shopping Cart</h2>
      <ul className="list-group mt-4">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <div>
              <button className="btn btn-secondary btn-sm" onClick={() => decrementQuantity(item.id)}>
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button className="btn btn-secondary btn-sm" onClick={() => incrementQuantity(item.id)}>
                +
              </button>
              <button className="btn btn-danger btn-sm ms-3" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartQty_10;
