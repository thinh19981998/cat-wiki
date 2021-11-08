import React from 'react';
import { Link } from 'react-router-dom';
import './TopCard.scss';

function TopCard({ url, name, desc, id }) {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={url} alt={name} loading='lazy' />
      </div>
      <div className='card__details'>
        <Link to={`/breed/${id}`} className='card__heading'>
          {name}
        </Link>
        <p className='card__desc'>{desc}</p>
      </div>
    </div>
  );
}

export default TopCard;
