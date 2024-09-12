import React from 'react';
import { Link } from 'react-router-dom';

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.image} alt={country.name} className="country-image" />
      <h2>{country.name}</h2>
      <p>{country.region}</p>
      <Link to={`/country/${country.name}`}>View Details</Link>
    </div>
  );
}

export default CountryCard;