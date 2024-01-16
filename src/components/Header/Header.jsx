// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        {/* <a className='cursor-pointer text-lg' href='/order'>Order</a>
        <a className='cursor-pointer text-lg' href='/shop'></a> */}
      </div>
    </nav>
  );
};

export default Header;