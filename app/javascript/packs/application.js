import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from "../components/Layout";
import Home from "../components/Home";
import ItemList from "../components/ItemList";
import BundleList from "../components/BundleList";


import {OrderProvider, OrderContext} from "../components/OrderContext";

import orderHandler from "../services/orderHandler";

const Application = ({data}) => {
    console.log(data);
    const [cartItems, setCartItems] = useState([]);
    const [isPurchased, setIsPurchased] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const { purchasedOrder, setPurchasedOrder } = useContext(OrderContext);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };
    const removeFromCart = (item) => {
        setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    };
    const handlePurchase = () => {
        orderHandler.placeOrder(cartItems).then((response)=>{
            console.log("Order placed successfully");
            setCartItems([]);
            setPurchasedOrder(response);
            setIsPurchased(true);
        }, (error) => {
            console.error(error);
            setErrorMessage(JSON.stringify(error));
        })
    };


    const handleNewOrder = () => {
        setIsPurchased(false);
        setPurchasedOrder(null);
        setErrorMessage(null)
        setCartItems([]);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={<Home handleNewOrder={handleNewOrder}
                                                handlePurchase={handlePurchase}
                                                isPurchased={isPurchased}
                                                cartItems={cartItems}
                                                errorMessage={errorMessage}
                                                removeFromCart={removeFromCart} />} />
                    <Route path="items" element={<ItemList isPurchased={isPurchased} addToCart={addToCart}
                                                           itemsData={data}/>} />
                    <Route path="bundles" element={<BundleList isPurchased={isPurchased} addToCart={addToCart}
                                                               itemsData={data}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById("app-container");
    const data = JSON.parse(node.dataset.reactProps);
    const root = ReactDOM.createRoot(node);
    root.render(
        <OrderProvider>
            <Application data={data}/>
        </OrderProvider>
    );
});