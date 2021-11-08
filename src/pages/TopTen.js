import React from 'react';
import TopCard from '../components/TopCard/TopCard';
import './TopTen.scss';
import Loading from '../components/Loading/Loading';

function TopTen({ topList, isLoading }) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h2 className='top-heading'>Top 10 most searched breeds</h2>
          {topList.map((item, index) => (
            <TopCard
              key={item.id}
              id={item.id}
              name={`${index + 1}. ${item.name}`}
              desc={item.description}
              url={item.image.url}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TopTen;
