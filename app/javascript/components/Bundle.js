// app/javascript/components/Item.js
import React from 'react';

const Bundle = ({ bundle, addToCart, isPurchased }) => (
    <div className={"shop-bundle"}>
        <h3>{bundle.name}</h3>

        <div className={"bundle-items"}>
            {bundle.item_combinations.map((ic) => (
                <div key={ic.id}>
                    <p>{ic.item.name} -- ${ic.item.price}</p>
                </div>
            ))}
        </div>
        <p>Total Price: ${bundle.total_price}</p>
        <p>Discount: {bundle.discount}%</p>
        <p><strong>Discounted Price: ${bundle.total_discounted_price}</strong></p>

        <p><small>Tax: {bundle.tax.name} - {bundle.tax.rate}%</small></p>

        <button onClick={() => addToCart(bundle)} disabled={isPurchased}>Add to Cart</button>
    </div>
);

export default Bundle;
