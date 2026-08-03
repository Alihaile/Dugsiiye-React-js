import React, { useContext } from 'react';
import CartContext from './CartContext';

const ProductItem = ({ ItemId, itemName, price }) => {
    const { addItem } = useContext(CartContext);

    const handleAddToCart = () => {
        const newItem = { ItemId, itemName, price };
        addItem(newItem);
    };

    return (
        <div>
            <h3>{itemName}</h3>
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductItem;