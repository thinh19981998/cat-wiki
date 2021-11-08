import React from 'react';
import logo from '../../assets/images/catwikilogowhite.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <img src={logo} alt='' />
      </div>
      <p>
        &copy; created by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/thinh19981998'
        >
          Thinh
        </a>
        - devChallenges.io 2021
      </p>
    </footer>
  );
}

export default Footer;
