import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonDark } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonLignt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  // Méthode pour basculer en mode sombre
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
  };

  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>Countries of the World</h1>
        </Link>
        <button id='toggle' className='btn-toggle-dark-mode' onClick={toggleDarkMode}>
          <FontAwesomeIcon className='far fa-moon' icon={faMoonDark} />
          <FontAwesomeIcon className='fas fa-moon' icon={faMoonLignt} />
          Dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
