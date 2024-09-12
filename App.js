import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryCard from './CountryCard';
import CountryDetails from './CountryDetails';
import countriesData from './countries.json'; // Assuming you place the JSON file in the src folder.

function App() {
  const [countries, setCountries] = useState(countriesData);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase()) ||
    country.region.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <h1>Country Information</h1>

        {/* Filter Input */}
        <input
          type="text"
          placeholder="Filter by name or region"
          value={filter}
          onChange={handleFilterChange}
        />

        <div className="cards-container">
          {filteredCountries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>

        <Switch>
          <Route path="/country/:name" component={CountryDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;