import { trustedBy } from '../../data';

import './TrustedBy.scss';

const TrustedBy = () => {
  return (
    <section className='trustedBy'>
      <div className='container'>
        <span>Trusted by:</span>
        {trustedBy.map((item) => {
          const { id, img, desc } = item;
          return <img key={id} src={img} alt={desc} />;
        })}
      </div>
    </section>
  );
};

export default TrustedBy;
