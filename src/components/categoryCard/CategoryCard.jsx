import { Link } from 'react-router-dom';

import './CategoryCard.scss';

const CategoryCard = ({ img, desc, title }) => {
  return (
    <Link to='/gigs?category=design'>
      <article className='categoryCard'>
        <img src={img} alt={title} />
        <span className='desc'>{desc}</span>
        <span className='title'>{title}</span>
      </article>
    </Link>
  );
};

export default CategoryCard;
