import React from 'react';
import logo from '../../img/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
      <img src={logo} alt='NewsGreed' className='logo' />
      <div className='search'>
        <input type='text' />
        <i className='fa fa-search'></i>
        <i className='fa fa-bookmark-o'></i>
        <i className='fa fa-bell-o'></i>
      </div>
      <div className='login'>
        <img
          className='avatar'
          alt='person'
          src='https://www.flaticon.com/svg/static/icons/svg/147/147144.svg'
        />
        &nbsp;
        <p>
          Anna
          <span>
            <i className='fa fa-chevron-down'></i>
          </span>
        </p>
      </div>
    </header>
  );
};

export default Navbar;
