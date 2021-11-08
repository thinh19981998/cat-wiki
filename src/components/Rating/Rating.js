import React from 'react';
import './Rating.scss';

function Rating({ rate }) {
  let i = 0;
  let arr = [];
  while (i < 5) {
    if (+rate > i) {
      arr.push('block fill');
    } else {
      arr.push('block');
    }
    i++;
  }
  return (
    <div className='rating'>
      {arr.map((item, index) => (
        <span className={item} key={index}></span>
      ))}
    </div>
  );
}

export default Rating;
