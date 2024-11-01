import React, {useContext, useEffect} from 'react';
import Order from './Order';
import {OrderContext} from "./OrderContext";


const OrderList = ({ status, orders }) => {

    useEffect(() => {
        console.log(orders)
    }, [orders]);

    if (!orders) return <p>Waiting for orders...</p>;

    return (
        <div className={status+"-orders"} >
            {orders.map((order) => (
                <Order key={order.id} order={order} />
            ))}
        </div>
    );
};

export default OrderList;
