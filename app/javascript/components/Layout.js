import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home - Cart</Link>
                    </li>
                    <li>
                        <Link to="/items">Items</Link>
                    </li>
                    <li>
                        <Link to="/bundles">Bundles</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;