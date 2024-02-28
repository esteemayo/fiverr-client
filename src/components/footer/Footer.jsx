import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { footerLinks, footerMenus, socials } from '../../data';

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
              {socials.map((social) => {
                const { id, img, alt } = social;
                return <img key={id} src={img} alt={alt} />;
              })}
            </div>
            {footerLinks.map((link) => {
              const { id, icon, text } = link;
              return (
                <div key={id} className='link'>
                  <img src={`/img/${icon}.png`} alt={icon} />
                  <span>{text}</span>
                </div>
              );
            })}
            <img src='/img/accessibility.png' alt='accessibility' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
