import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [purchasedOrder, setPurchasedOrder] = useState(null);

    return (
        <OrderContext.Provider value={{ purchasedOrder, setPurchasedOrder }}>
            {children}
        </OrderContext.Provider>
    );
};