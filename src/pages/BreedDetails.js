import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBreedById, getImageById } from '../apis';
import Loading from '../components/Loading/Loading';
import Rating from '../components/Rating/Rating';
import { isEmpty } from '../Helper';
import './BreedDetail.scss';

function BreedDetails() {
  const { id } = useParams();
  const [breedDetails, setBreedDetails] = useState({});
  const [imgList, setImgList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    await getBreedById(id).then((res) => setBreedDetails(res.data));
    await getImageById(id).then((res) => setImgList(res.data));
    setIsLoading(false);
  }, [id]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='catBreed'>
          {!isEmpty(breedDetails) && !isEmpty(imgList) && (
            <div className='breed'>
              <div className='breed__img'>
                <img src={imgList[0].url} alt='' />
              </div>
              <div className='breed__info'>
                <h2 className='breed__name'>{breedDetails.name}</h2>
                <p className='breed__desc'>{breedDetails.description}</p>
                <div className='feature'>
                  <span className='feature__name'>Adaptability: </span>
                  <span className='feature__content'>
                    {breedDetails.temperament}
                  </span>
                </div>
                <div className='feature'>
                  <span className='feature__name'>Origin: </span>
                  <span className='feature__content'>
                    {breedDetails.origin}
                  </span>
                </div>
                <div className='feature'>
                  <span className='feature__name'>Life Span: </span>
                  <span className='feature__content'>
                    {breedDetails.life_span}
                  </span>
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Adaptability: </span>
                  <Rating rate={breedDetails.adaptability} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Affection level: </span>
                  <Rating rate={breedDetails.affection_level} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Child Friendly: </span>
                  <Rating rate={breedDetails.child_friendly} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Grooming: </span>
                  <Rating rate={breedDetails.grooming} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Intelligence: </span>
                  <Rating rate={breedDetails.intelligence} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Health issues: </span>
                  <Rating rate={breedDetails.health_issues} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Social needs: </span>
                  <Rating rate={breedDetails.social_needs} />
                </div>
                <div className='feature rate'>
                  <span className='feature__name'>Stranger friendly: </span>
                  <Rating rate={breedDetails.stranger_friendly} />
                </div>
              </div>
            </div>
          )}
          {!isEmpty(imgList) && (
            <div className='photo-list'>
              <h3 className='photo-list__heading'>Other photos</h3>
              <div className='photo-list__container'>
                {imgList.map((item) => (
                  <div className='photo-list__img' key={item.id}>
                    <img src={item.url} alt='cat' />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default BreedDetails;
