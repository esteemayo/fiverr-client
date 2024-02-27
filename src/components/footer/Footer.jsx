import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { footerMenus } from '../../data';

import './Footer.scss';

const Footer = () => {
  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='top'>
          {footerMenus.map((menu) => {
            const { title, links } = menu;
            return (
              <div key={title} className='item'>
                <h2>{title}</h2>
                {links.map((link) => {
                  const { id, label } = link;
                  return <span key={id}>{label}</span>;
                })}
              </div>
            );
          })}
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <Link to='/'>
              <h2>fiverr</h2>
            </Link>
            <span>© Fiverr International Ltd. {year}</span>
          </div>
          <div className='right'>
            <div className='social'>
              <img src='/img/twitter.png' alt='twitter' />
              <img src='/img/facebook.png' alt='facebook' />
              <img src='/img/linkedin.png' alt='linkedin' />
              <img src='/img/pinterest.png' alt='pinterest' />
              <img src='/img/instagram.png' alt='instagram' />
            </div>
            <div className='link'>
              <img src='/img/language.png' alt='language' />
              <span>English</span>
            </div>
            <div className='link'>
              <img src='/img/coin.png' alt='coin' />
              <span>USD</span>
            </div>
            <img src='/img/accessibility.png' alt='accessibility' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
