// app/javascript/components/Item.js
import React from 'react';

const Item = ({ item, addToCart, isPurchased }) => (
    <div className={"shop-item"}>
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>

        <p><strong>Price: ${item.price}</strong></p>
        <p><small>{item.tax.name} - {item.tax.rate}%</small></p>

        <button onClick={() => addToCart(item)} disabled={isPurchased}>Add to Cart</button>
    </div>
);

export default Item;
