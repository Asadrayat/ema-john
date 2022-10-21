import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Contexts/UserContext';
import './Header.css'
const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='manu'>
                <Link to="shop">Shop</Link>
                <Link to="order">Order</Link>
                <Link to="inventory">Inventory</Link>
                <Link to="about">About</Link>
                {user?.uid ?
                    <button className='btn-sOut' onClick={logOut}>Signout</button> :
                    <>
                        <Link to="login">Login</Link>
                        <Link to="signin">Signup</Link>
                    </>
                }
            </div>

        </nav>
    );
};

export default Header;