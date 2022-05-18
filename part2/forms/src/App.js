import { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: persons.length + 1,
      number: number,
    };
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return setNewName('');
    } else {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNumber('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} number={number} setNumber={setNumber} />
      <h2>Names and Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
