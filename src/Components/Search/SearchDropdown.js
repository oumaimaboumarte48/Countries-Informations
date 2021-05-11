import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SearchDropdown = () => {
  // État pour gérer la visibilité du menu déroulant
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Méthode pour basculer la liste déroulante
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Méthode de filtrage des pays par région
  const filterCountries = value => {
    const regionName = document.querySelectorAll('.country-region');
    regionName.forEach(region => {
      if (region.innerText.includes(value) || value === 'All') {
        region.parentElement.parentElement.style.display = 'block';
      } else {
        region.parentElement.parentElement.style.display = 'none';
      }
    });
  };

  return (
    <div className='dropdown' onClick={toggleDropdown}>
      Filter by region
      <FontAwesomeIcon className='fas fa-chevron-down' icon={faChevronDown} />
      {dropdownVisible && (
        <ul>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            All
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Africa
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            America
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Asia
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Europe
          </li>
          <li
            onClick={event => {
              filterCountries(event.target.innerText);
            }}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
