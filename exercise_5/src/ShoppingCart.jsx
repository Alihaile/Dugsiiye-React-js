import { useState } from 'react';


export const ListItems = ({ items, removeItem, increment, decrement, totalPrice }) => {

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <Item key={item.id} item={item} removeItem={removeItem} increment={increment} decrement={decrement} />
                ))}
            </ul>

            <br />
            <h4><strong>Total price: ${totalPrice}</strong></h4>
        </div>
    )
}

const Item = ({ item, removeItem, increment, decrement }) => {

    return (
        <>
            <li><strong>{item.name}</strong> - {item.price}<br />
                Quantity: <button className="decrement" onClick={() => decrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button className="increment" onClick={() => increment(item)}>+</button>

                <button className="increment" onClick={() => removeItem(item)}>Remove</button>
            </li>
        </>
    )
}

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const addItem = () => {
        const newItem = { id: crypto.randomUUID(), name, price, quantity: 1 };
        setCartItems([...cartItems, newItem]);

        console.log(cartItems)
    }

    let removeItem = (item) => {
        let filteredItems = cartItems.filter((current) => item.id !== current.id)
        setCartItems(filteredItems)
    }

    let getTotalPrice = cartItems.reduce((total, current) => total + current.price * current.quantity, 0)


    let increment = (item) => {
        setCartItems((prev) => prev.map((it) =>
            it.id === item.id ?
                { ...it, quantity: item.quantity + 1 } : item

        ))

    }
    let decrement = (item) => {
        setCartItems((prev) => prev.map((it) =>
            it.id === item.id && item.quantity > 1 ?
                { ...it, quantity: item.quantity - 1 } : item

        ))
    }

    return (
        <div>
            <h2>Simple Shopping Cart</h2>
            <h4>Add A Product</h4>
            <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button onClick={addItem}>Add to Cart</button>
            <ListItems items={cartItems} increment={increment} decrement={decrement}
                removeItem={removeItem} totalPrice={getTotalPrice}
            />
        </div>
    )
}

export default ShoppingCart