// app/javascript/components/Receipt.js
import React, {useEffect, useState} from 'react';
import orderHandler from "../services/orderHandler";

const Receipt = ({ cartItems, purchasedOrder }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        // Fetch the order details when the component mounts
        orderHandler.fetchOrder(purchasedOrder.data.order_id).then((response)=>{
            let orderData = response;
            orderData.order_combinations = orderData.order_combinations.map( (combinations)=>{
                return combinations.item ? combinations.item : combinations.combination;
            } )
            setOrder(orderData);
        });
    }, [purchasedOrder]);

    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <h2>Receipt</h2>
            {order.order_combinations.map((item, index) => (

                <div key={index}>
                    <span>{item.name}</span>
                </div>

            ))}
            <h3>Total: ${parseFloat(order.total_price).toFixed(2)}</h3>

            <p><strong>{purchasedOrder.status}</strong></p>
            <p>Your order is being prepared and you will be notified once it is ready</p>
        </div>
    );
};

export default Receipt;
