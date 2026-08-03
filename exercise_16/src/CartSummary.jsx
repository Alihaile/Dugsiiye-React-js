import React, { useContext } from 'react';
import CartContext from './CartContext';

const CartSummary = () => {
  const { items, removeItem } = useContext(CartContext);


  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {items.length}</p>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.ItemId}>
              <span>{item.itemName}</span>
              <span>${parseFloat(item.price).toFixed(2)}</span>
              <button onClick={() => removeItem(item.ItemId)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartSummary;