import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrement = item =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));

  const handleDecrement = item =>
    item.quantity > 1 && dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));

  const handleRemove = item => dispatch(removeItem({ id: item.id }));

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div>
        {cart.items.map(item => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
            <div>
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        ))}
      </div>
      <h3>Total: ${cart.totalPrice.toFixed(2)}</h3>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCartPage;
