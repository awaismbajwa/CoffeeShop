// app/javascript/components/Receipt.js
import React from 'react';

const Receipt = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

    return (
        <div>
            <h2>Receipt</h2>
            {cartItems.map((item, index) => (
                <div key={index}>
                    <span>{item.name} - ${item.price}</span>
                </div>
            ))}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Receipt;
