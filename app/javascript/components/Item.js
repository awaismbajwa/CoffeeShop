// app/javascript/components/Item.js
import React from 'react';

const Item = ({ item, addToCart }) => (
    <div className={"shop-item"} >
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Category: {item.category}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
);

export default Item;
