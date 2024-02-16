import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = ({ img, pp, category, username }) => {
  return (
    <Link to='/'>
      <article className='projectCard'>
        <img src={img} alt={category} />
        <div className='info'>
          <img src={pp} alt={username} />
          <div className='texts'>
            <h2>{category}</h2>
            <span>{username}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
