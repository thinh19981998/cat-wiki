import React from 'react';
import img1 from '../../assets/images/image 2.png';
import img2 from '../../assets/images/image 1.png';
import img3 from '../../assets/images/image 3.png';
import './Why.scss';

function Why() {
  return (
    <div className='why'>
      <div className='why__content'>
        <h2 className='why__heading'>why shoud you have a cat?</h2>
        <p className='why__parag'>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <a
          href='https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm'
          target='_blank'
          rel='noreferrer'
          className='why__btn'
        >
          read more<span className='material-icons'>trending_flat</span>
        </a>
      </div>
      <div className='why__imgGroup'>
        <div className='why__imgGroup1'>
          <div>
            <img src={img1} alt='' className='img1' />
          </div>
          <div>
            <img src={img2} alt='' className='img2' />
          </div>
        </div>
        <div className='why__imgGroup2'>
          <div>
            <img src={img3} alt='' className='img3' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
