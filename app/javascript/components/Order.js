import React, {useContext, useEffect} from 'react';
import orderHandler from "../services/orderHandler";
import {OrderContext} from "./OrderContext";

const Order = ({ order }) => {

    const { purchasedOrder, setPurchasedOrder } = useContext(OrderContext);


    useEffect(()=>{

        if (order.status === "new"){
            const timer = setTimeout(() => {
                orderHandler.updateOrderStatus(order,"completed").then((response)=>{
                    alert("Order ID: "+response.id+"\nOrder status: "+response.status);
                    setPurchasedOrder(null)
                })
            }, 10000);

            return () => clearTimeout(timer);
        }
    },[order]);

    return (
        <div className={"order"}>

            <h3>Order ID: {order.id}</h3>

            <p>Total Price: ${parseFloat(order.total_price).toFixed(2)}</p>

        </div>
    );
}

export default Order;
