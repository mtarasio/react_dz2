import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'></div>
      <h1 className='header__title'>Blog name</h1>
      <ul className='header__nav-menu'>
         <li className='menu-item'></li>
         <li className='menu-item'></li>
         <li className='menu-item'></li>
         <li className='menu-item'></li>
         <li className='menu-item'></li>
      </ul>
    </div>
  );
}

export default Header;