import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <span className='my-name'>Archer Zou</span>
      <div className='a-tags'>
        <a
          href='https://archerzou.github.io/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-globe fa-2x icon' />
        </a>

        <a
          href='mailto:archer.zou84@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fas fa-envelope fa-2x icon' />
        </a>

        <a
          href='https://www.linkedin.com/in/archer-zou-5600981a1/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-linkedin fa-2x icon' />
        </a>

        <a
          href='https://github.com/archerzou'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-github fa-2x icon' />
        </a>
      </div>
    </div>
  );
};

export default Footer;