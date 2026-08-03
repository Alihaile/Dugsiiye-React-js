import { useState } from 'react';
import CartContext from './CartContext';
import CartSummary from './CartSummary';
import ProductItem from './ProductItem';

function App() {

  const [items, setItems] = useState([]);

  document.title = 'Exercise 16';


  const addItem = (item) => {
    setItems([...items, item])

  }

  const removeItem = (itemId) => {
    const updatedItems = items.filter(item => item.ItemId !== itemId);
    setItems(updatedItems);
  }

  return (
    <>
      <CartContext.Provider value={{ items, addItem, removeItem }}>
        <ProductItem key={1} ItemId={1} itemName="Widget" price={19.99} />
        <ProductItem key={2} ItemId={2} itemName="Gadget" price={29.99} />
        <CartSummary />
      </CartContext.Provider>
    </>
  )
}

export default App
