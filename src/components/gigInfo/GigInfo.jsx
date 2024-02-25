import { formatCurrency } from '../../utils/formatCurrency';

import './GigInfo.scss';

const GigInfo = ({
  price,
  features,
  shortTitle,
  shortDesc,
  deliveryTime,
  revisionNumber,
}) => {
  return (
    <aside className='gigInfo'>
      <div className='price'>
        <h3>{shortTitle}</h3>
        <h2>{formatCurrency(price)}</h2>
      </div>
      <p>{shortDesc}</p>
      <div className='details'>
        <div className='item'>
          <img src='/img/clock.png' alt='clock icon' />
          <span>{deliveryTime} days delivery</span>
        </div>
        <div className='item'>
          <img src='/img/recycle.png' alt='recycle icon' />
          <span>{revisionNumber} revisions</span>
        </div>
      </div>
      <div className='feature'>
        {features.map((feature) => {
          return (
            <div key={feature} className='item'>
              <img src='/img/greencheck.png' alt='greencheck icon' />
              <span>{feature}</span>
            </div>
          );
        })}
      </div>
      <button>Continue</button>
    </aside>
  );
};

export default GigInfo;
