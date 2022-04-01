import React from 'react';
import logo from '../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Contact</a>
                <a href="#">Cart</a>
                <a href="#">Account</a>
            </div>
        </div>
    );
};

export default Header;