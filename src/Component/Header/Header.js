import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
     <nav className='header'>
        <img src={logo} alt="" />
        <div className='manu'>
        <a href="/order">Order</a>
        <a href="/order">Order Reveiw</a>
        <a href="/order">Manage Inventory</a>
        <a href="/order">Login</a>
        </div>
      
     </nav>
    );
};

export default Header;