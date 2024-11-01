// app/javascript/components/ItemList.js
import React, { useEffect, useState } from 'react';
import Item from './Item';

const ItemList = ({ itemsData, addToCart, isPurchased }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(itemsData.items);
    }, []);

    return (
        <div className={"items"}>
            {itemsData.items.map((item) => (
                <Item key={item.id} isPurchased={isPurchased} item={item} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ItemList;
