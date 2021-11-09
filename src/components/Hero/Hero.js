import React, { useEffect, useRef, useState } from 'react';
import './Hero.scss';
import svgImg from '../../assets/images/catwikilogowhite.svg';
import { Link } from 'react-router-dom';

function Hero({ catBreedList }) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const formRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!formRef.current.contains(event.target)) {
        setIsFocus(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBreedChoice = (name) => {
    setSearchTerm(name);
  };

  const filteredList = catBreedList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resultList =
    filteredList.length > 0 ? (
      filteredList.map((item) => (
        <li onClick={handleBreedChoice.bind(null, item.name)} key={item.id}>
          <Link to={`/breed/${item.id}`}>{item.name}</Link>
        </li>
      ))
    ) : (
      <li className='no-result'>No result</li>
    );

  return (
    <div className='hero'>
      <h1 className='heading'>
        <img src={svgImg} className='heading__main' alt='logo svg' />
        <span className='heading__sub'>
          Get to know more about your cat breed
        </span>
      </h1>
      <div className='search' ref={formRef}>
        <input
          type='text'
          className='search__input'
          placeholder='Enter cat breed'
          autoComplete='off'
          onChange={handleInputChange}
          value={searchTerm}
          onClick={() => setIsFocus(true)}
        />
        <span className='material-icons search__icon'>search</span>

        {isFocus && (
          <div className='search__sugg-container'>
            <div className='search__clostBtn'>
              <span
                className='material-icons'
                onClick={() => setIsFocus(false)}
              >
                close
              </span>
            </div>
            <div className='search__phone'>
              <input
                type='text'
                className='search__input'
                placeholder='Enter cat breed'
                autoComplete='off'
                onChange={handleInputChange}
                value={searchTerm}
              />
              <span className='material-icons search__icon'>search</span>
            </div>
            <ul className='search__suggestion'>{resultList}</ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
