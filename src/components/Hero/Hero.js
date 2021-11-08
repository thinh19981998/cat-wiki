import React, { useState } from 'react';
import './Hero.scss';
import svgImg from '../../assets/images/catwikilogowhite.svg';
import { Link } from 'react-router-dom';

function Hero({ catBreedList }) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFocus = () => {
    setIsFocus(true);
  };

  const blurHandler = () => {
    const timer = setTimeout(() => setIsFocus(false), 300);
    return clearTimeout(timer);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBreedChoice = (name) => {
    setSearchTerm(name);
    blurHandler();
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

  const submitHandler = (event) => event.preventDefault();

  return (
    <div className='hero'>
      <h1 className='heading'>
        <img src={svgImg} className='heading__main' alt='logo svg' />
        <span className='heading__sub'>
          Get to know more about your cat breed
        </span>
      </h1>
      <form className='search' onBlur={blurHandler} onSubmit={submitHandler}>
        <input
          type='text'
          className='search__input'
          placeholder='Enter cat breed'
          autoComplete='off'
          onFocus={handleFocus}
          onChange={handleInputChange}
          value={searchTerm}
        />
        <span className='material-icons search__icon'>search</span>

        {isFocus && (
          <div className='search__sugg-container'>
            <ul className='search__suggestion'>{resultList}</ul>
          </div>
        )}
      </form>
    </div>
  );
}

export default Hero;
