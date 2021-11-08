import React from 'react';
import { Link } from 'react-router-dom';
import './TopTen.scss';

function TopTen({ catBreedList }) {
  return (
    <div className='top-ten'>
      <span className='top-ten__most'>Most Searched Breeds</span>
      <div className='top-ten__topBox'>
        <h2 className='top-ten__heading'>66+ Breeds for you to discover </h2>
        <Link to='/top-ten' className='top-ten__more'>
          see more<span className='material-icons'>trending_flat</span>
        </Link>
      </div>

      <ul className='top-ten__list'>
        {catBreedList.slice(0, 4).map((item) => (
          <li className='top-ten__card' key={item.name}>
            <Link to={`/breed/${item.id}`}>
              <img src={item.image.url} alt={item.name} />
              <p className='top-ten__name'>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopTen;
