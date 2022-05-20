import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      find countries: <input type="text" name="search" value={filter} onChange={({ target }) => setFilter(target.value)} />
    </div>
  );
};

export default Filter;
