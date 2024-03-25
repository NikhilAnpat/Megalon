import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkoutCart } from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleCheckout = () => {
    dispatch(checkoutCart());
   
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
   
    const gst = total * 0.05;
    return total + gst;
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Amount Due: ${calculateTotalAmount()}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
