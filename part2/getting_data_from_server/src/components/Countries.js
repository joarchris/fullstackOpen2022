import React, { useState } from 'react';
import Country from './Country';

const Countries = ({ filteredCountries }) => {
  const [preview, setPreview] = useState([]);
  const handleCountry = (name) => {
    preview.includes(name) ? setPreview(preview.filter((i) => i !== name)) : setPreview([...preview, name]);
  };

  return (
    <div>
      {filteredCountries.map((country) => {
        return (
          <div key={country.name.common}>
            <div style={{ marginTop: '10px' }}>
              {country.name.common}
              <button onClick={() => handleCountry(country.name.common)}>
                {preview.includes(country.name.common) ? 'hide' : 'show'}
              </button>
              {preview.includes(country.name.common) && <Country filteredCountries={country} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
