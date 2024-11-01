import React, {useContext, useEffect, useState} from 'react';
import ItemList from './ItemList';
import Cart from '../components/Cart';
import Receipt from '../components/Receipt';
import OrderList from "./OrderList";
import orderHandler from "../services/orderHandler";
import {OrderContext} from "./OrderContext";



const Home = ({ cartItems, removeFromCart, isPurchased, handlePurchase, handleNewOrder, errorMessage}) => {
    const [newOrders, setNewOrders] = useState();
    const [completedOrders, setCompletedOrders] = useState();

    const { purchasedOrder, setPurchasedOrder } = useContext(OrderContext);


    useEffect(() => {
        orderHandler.fetchOrdersByStatus("new").then((response)=>{
            setNewOrders(response);
        });
        orderHandler.fetchOrdersByStatus("completed").then((response)=>{
            setCompletedOrders(response);
        });
    }, [purchasedOrder]);


    return (
        <div className={"home"}>
            <div className={"new-orders"} >
                <h1>New Orders</h1>
                <OrderList status={"new"} orders={newOrders}></OrderList>
            </div>
            <div className={"pos"}>
                {isPurchased ? (
                    <div className={"receipt"}>
                        <Receipt purchasedOrder={purchasedOrder} handleNewOrder={handleNewOrder}/>

                        <button onClick={handleNewOrder}>
                            New Order
                        </button>
                    </div>
                ) : (
                    <>

                        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>

                        <button onClick={handlePurchase} disabled={cartItems.length === 0}>
                            Place Order
                        </button>
                        <div>
                            {cartItems.length === 0 ?
                                <p>Cart is empty! Add Items or bundles to the cart for placing order</p>
                                : <p>Place order when you're done</p>}
                        </div>

                        <div className={"error"}>
                            <p>{errorMessage}</p>
                        </div>
                    </>
                )}
            </div>
            <div className={"completed-orders"}>
                <h1>Completed Orders</h1>
                <OrderList status={"completed"} orders={completedOrders}></OrderList>
            </div>
        </div>
    );
};

export default Home;