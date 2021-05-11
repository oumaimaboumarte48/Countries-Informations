import React, { useState } from 'react';

const SearchInput = () => {
  //Etat pour gérer la valeur de l'entrée
  const [value, setvalue] = useState('');

  // Méthode pour définir la valeur de l'entrée
  const handleChangeValue = value => {
    setvalue(value);
    searchCountries(value);
  };

  // Méthode pour masquer ou afficher les pays par son nom
  const searchCountries = value => {
    const countryName = document.querySelectorAll('.country-name');
    countryName.forEach(name => {
      if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
        name.parentElement.parentElement.style.display = 'block';
      } else {
        name.parentElement.parentElement.style.display = 'none';
      }
    });
  };

  return (
    <input
      className='search'
      type='text'
      placeholder='Search for a country'
      value={value}
      onChange={event => {
        handleChangeValue(event.target.value);
      }}
    />
  );
};

export default SearchInput;
