import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';
import Filter from './components/Filter';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }, []);

  if (countries.length !== 0 && filter !== '') {
    const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()));
    if (filteredCountries.length > 10) {
      return (
        <div>
          <Filter filter={filter} setFilter={setFilter} />
          <p>Too many matches, specify another filter</p>
        </div>
      );
    }
    if (filteredCountries.length === 1) {
      return (
        <div>
          <Country filteredCountries={filteredCountries[0]} />
        </div>
      );
    } else {
      return (
        <div>
          <Filter filter={filter} setFilter={setFilter} />
          <Countries filteredCountries={filteredCountries} />
        </div>
      );
    }
  } else {
    return (
      <div>
        <Filter filter={filter} setFilter={setFilter} />
        <Countries filteredCountries={countries} />
      </div>
    );
  }
};

export default App;
