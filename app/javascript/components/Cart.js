// app/javascript/components/Cart.js
import React from 'react';
import orderHandler from "../services/orderHandler";

const Cart = ({ cartItems, removeFromCart }) => {
    const totalPrice = orderHandler.calculateTotalPrice(cartItems);
    const totalTaxPrice = orderHandler.calculateTotalTaxPrice(cartItems);

    return (
        <div>
            <h1>New Order Cart</h1>
            {cartItems.map((item, index) => (
                <div className={"cart-item"} key={index}>
                    <span>{item.name} - ${parseFloat(orderHandler.getItemPrice(item))}</span>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <h3>Total With Taxes: ${totalTaxPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
