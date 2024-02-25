import { useMemo } from 'react';

import './Star.scss';

const Star = ({ starNumber, totalStars }) => {
  const stars = useMemo(() => {
    return (
      !isNaN(Math.round(totalStars / starNumber)) &&
      Math.round(totalStars / starNumber)
    );
  }, [starNumber, totalStars]);

  return (
    <>
      {!isNaN(Math.round(totalStars / starNumber)) && (
        <div className='stars'>
          {Array(Math.round(totalStars / starNumber))
            .fill()
            .map((_, index) => {
              return <img key={index} src='/img/star.png' alt='star icon' />;
            })}
          <span>{stars}</span>
        </div>
      )}
    </>
  );
};

export default Star;
