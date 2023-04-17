import React, { useState } from 'react';
import { Link } from "react-router-dom";

import ProductIcon from "Assets/icons/product.png"
import CartIcon from "Assets/icons/cart.png"
import OrderIcon from "Assets/icons/order.png"
import AboutIcon from "Assets/icons/about.png"
import ContactIcon from "Assets/icons/contact.png"
import ArrowIcon from "Assets/icons/arrow.png"
import BrandIcon from "Assets/icons/brand-logo.png"
import BrandIcon2 from "Assets/icons/fav.ico"
import UserImage from "Assets/images/user.jpg"

const Sidebar = () => {
    const [toggle, setToggle] = useState(false)

    return <aside className={`${toggle ? "close-sidebar" : "sidebar"}`}>
        <div className="toggle-controller" onClick={() => setToggle(!toggle)}><img src={ArrowIcon} className='toggle-icon' /></div>
        <header className='sidebar-header'><img src={toggle ? BrandIcon2 : BrandIcon} className='brand-logo' /></header>
        <menu className='sidebar-menu'>
            <ul className="sidebar-menu-list">
                <li className='active'>
                    <Link><img src={ProductIcon} className='sidebar-icon' /> <span>Products</span> </Link><div className="hover-effect">Products</div>
                </li>
                <li>
                    <Link><img src={CartIcon} className='sidebar-icon' /> <span>Cart</span></Link><div className="hover-effect">Cart</div>
                </li>
                <li>
                    <Link><img src={OrderIcon} className='sidebar-icon' /> <span>Order</span></Link><div className="hover-effect">Order</div>
                </li>
                <li>
                    <Link><img src={AboutIcon} className='sidebar-icon' /> <span>About</span></Link><div className="hover-effect">About</div>
                </li>
                <li>
                    <Link><img src={ContactIcon} className='sidebar-icon' /> <span>Contact Us</span></Link><div className="hover-effect">Contact Us</div>
                </li>

            </ul>
        </menu>
        <footer className='sidebar-footer'>
            <div className="profile">
                <div className="profile-image">
                    <img src={UserImage} />
                </div>
                <div className="profile-description">
                    <div className="profile-detail">
                        <div className="user-name">Salman</div>
                        <div className="user-role">{`( Admin )`}</div>
                    </div>

                    <div className="logout-text">Log Out</div>
                </div>
            </div>

        </footer>
    </aside >
}

export default Sidebar