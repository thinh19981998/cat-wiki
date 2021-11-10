import React, { useEffect, useRef, useState } from 'react';
import './Hero.scss';
import svgImg from '../../assets/images/catwikilogowhite.svg';
import { Link, useHistory } from 'react-router-dom';

function Hero({ catBreedList }) {
  const [isFocus, setIsFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cursor, setCursor] = useState(-1);

  const formRef = useRef();
  const searchResultRef = useRef();
  let history = useHistory();

  useEffect(() => {
    const handler = (event) => {
      if (!formRef.current.contains(event.target)) {
        setIsFocus(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  });

  const scrollIntoView = (position) => {
    searchResultRef.current.scrollTo({
      top: position - 11,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (cursor < 0 || cursor > catBreedList.length || !searchResultRef) {
      return () => {};
    }

    let listItems = Array.from(searchResultRef.current.children);
    listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
  }, [cursor, catBreedList.length]);

  const showSuggestion = () => setIsFocus(true);

  const hideSuggestion = () => setIsFocus(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setCursor(-1);
    scrollIntoView(0);
  };

  const handleBreedChoice = (name) => {
    setSearchTerm(name);
  };

  const filteredList = catBreedList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resultList =
    filteredList.length > 0 ? (
      filteredList.map((item, index) => (
        <li
          onClick={handleBreedChoice.bind(null, item.name)}
          key={item.id}
          className={`${index === cursor ? 'active' : ''}`}
        >
          <Link to={`/breed/${item.id}`}>{item.name}</Link>
        </li>
      ))
    ) : (
      <li className='no-result'>No result</li>
    );

  const keyboardNavigation = (e) => {
    if (e.key === 'ArrowDown') {
      isFocus
        ? setCursor((c) => (c < filteredList.length - 1 ? c + 1 : c))
        : showSuggestion();
    }
    if (e.key === 'ArrowUp') {
      setCursor((c) => (c > 0 ? c - 1 : 0));
    }
    if (e.key === 'Escape') {
      hideSuggestion();
    }
    if (e.key === 'Enter' && cursor >= 0) {
      setSearchTerm(filteredList[cursor].name);
      hideSuggestion();
      history.push(`/breed/${filteredList[cursor].id}`);
    }
  };

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
          onKeyDown={keyboardNavigation}
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
                onKeyDown={keyboardNavigation}
              />
              <span className='material-icons search__icon'>search</span>
            </div>
            <ul className='search__suggestion' ref={searchResultRef}>
              {resultList}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
