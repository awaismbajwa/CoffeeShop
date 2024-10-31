import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from "../components/Layout";
import Home from "../components/Home";
import ItemList from "../components/ItemList";
import BundleList from "../components/BundleList";

const Application = ({data}) => {
    console.log(data);
    const [cartItems, setCartItems] = useState([]);
    const [isPurchased, setIsPurchased] = useState(false);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };
    const removeFromCart = (item) => {
        setCartItems((prev) => prev.filter((i) => i.id !== item.id));
    };
    const handlePurchase = () => {
        setIsPurchased(true);
    };


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout />}>
                    <Route index element={<Home itemsData={data} handlePurchase={handlePurchase} isPurchased={isPurchased} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
                    <Route path="items" element={<ItemList addToCart={addToCart} itemsData={data}/>} />
                    <Route path="bundles" element={<BundleList addToCart={addToCart} itemsData={data}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const node = document.getElementById("app-container");
    const data = JSON.parse(node.dataset.reactProps);
    const root = ReactDOM.createRoot(node);
    root.render(<Application data={data}/>);
});