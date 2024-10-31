// app/javascript/components/Cart.js
import React from 'react';

const getItemPrice = (item) => {
    return item.price? item.price : item.total_discounted_price;
}

const Cart = ({ cartItems, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(getItemPrice(item)), 0);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <span>{item.name} - ${parseFloat(getItemPrice(item))}</span>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
