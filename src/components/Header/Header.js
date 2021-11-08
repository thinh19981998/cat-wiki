import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/catwikilogo.svg';

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <Logo />
      </Link>
    </header>
  );
}

export default Header;
