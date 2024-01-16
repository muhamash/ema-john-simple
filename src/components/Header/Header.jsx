// Header.js
import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';

const Header = () =>
{
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  }
  return (
    <nav className='header'>
      <img className='cursor-pointer' src={logo} alt="" onClick={handleLogoClick}/>
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