// app/javascript/components/ItemList.js
import React, { useEffect, useState } from 'react';
import Bundle from './Bundle';

const BundleList = ({ itemsData, addToCart }) => {
    const [bundles, setBundles] = useState([]);

    useEffect(() => {
        setBundles(itemsData.bundles);
    }, []);

    return (
        <div className={"bundles"} >
            {itemsData.bundles.map((bundle) => (
                <Bundle key={bundle.id} bundle={bundle} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default BundleList;
