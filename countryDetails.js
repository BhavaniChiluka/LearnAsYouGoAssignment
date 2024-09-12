import React from 'react';
import { useParams } from 'react-router-dom';
import countriesData from './countries.json';

function CountryDetails() {
  const { name } = useParams();
  const country = countriesData.find((c) => c.name === name);

  if (!country) {
    return <h2>Country not found!</h2>;
  }

  return (
    <div className="country-details">
      <h1>{country.name}</h1>
      <img src={country.image} alt={country.name} className="country-image" />
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.details.population}</p>
      <p><strong>Capital:</strong> {country.details.capital}</p>
      <p><strong>Languages:</strong> {country.details.languages.join(', ')}</p>
    </div>
  );
}

export default CountryDetails;
