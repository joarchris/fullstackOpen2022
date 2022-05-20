const Countries = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.map((country) => {
        return <p key={country.name.common}>{country.name.common}</p>;
      })}
    </div>
  );
};

export default Countries;
