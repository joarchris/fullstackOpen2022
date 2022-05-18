import React from 'react';

const Form = ({ addPerson, newName, setNewName, number, setNumber }) => {
  return (
    <>
      <h2>Add new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          Number: <input value={number} onChange={(event) => setNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
