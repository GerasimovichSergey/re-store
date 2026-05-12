import React from 'react';
import './shopHeader.css';


const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <a className="logo text-dark" href="#">ReStore</a>
            <a className="shopping-cart">
                <i className="cart-icon fa-solid fa-cart-shopping" />
                {numItems} items (${total})
            </a>
        </header>
    );
};


export default ShopHeader;