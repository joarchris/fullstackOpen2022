import React from 'react';
import WeatherAPI from './WeatherAPI';

const Country = ({ filteredCountries }) => {
  const name = filteredCountries.name.common;
  const capital = filteredCountries.capital;
  const area = filteredCountries.area;
  const languages = filteredCountries.languages;
  const flag = filteredCountries.flags.png;
  const latlong = filteredCountries.capitalInfo.latlng;

  return (
    <div key={name}>
      <h2>{name}</h2>
      <span>capital: {capital}</span>
      <span>area: {area}</span>
      <h3>languages: </h3>
      <ul>
        {Object.keys(languages).map((language, i) => (
          <li key={i}>{languages[language]}</li>
        ))}
      </ul>
      <img src={flag} width="200" alt={name} />
      <h3>Weather in {capital}</h3>
      <WeatherAPI latlng={latlong} />
    </div>
  );
};

export default Country;
