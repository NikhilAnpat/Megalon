import React from 'react';
import { useSelector } from 'react-redux';

const FinalOrder = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <h3>Order Summary:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default FinalOrder;
