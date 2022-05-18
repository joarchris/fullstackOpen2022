import { useState } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([]);
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
