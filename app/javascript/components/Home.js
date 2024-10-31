import React, { useState } from 'react';
import ItemList from './ItemList';
import Cart from '../components/Cart';
import Receipt from '../components/Receipt';
import BundleList from "./BundleList";
import cart from "../components/Cart";

const Home = ({addToCart, cartItems, removeFromCart, isPurchased, handlePurchase, itemsData}) => {

    return (
        <div className={"home"}>
            {isPurchased ? (
                <Receipt cartItems={cartItems} />
            ) : (
                <>
                    <div>
                        {cartItems.length ===0 ? <p>Your cart is empty! Add Items or bundles to your cart for placing order</p>
                            : <p>Place order when you're done</p>}
                    </div>
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>

                    <button onClick={handlePurchase} disabled={cartItems.length === 0}>
                        Place Order
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;