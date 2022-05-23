import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import personService from './services/persons';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const Notification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      id: Math.random() * 10000,
      number: number,
    };
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return setNewName('');
    } else {
      setPersons(persons.concat(newPerson));
      setErrorMessage(`${newName} has been added to phonebook`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      setNewName('');
      setNumber('');
    }
    personService.create(newPerson).then((response) => {});
  };

  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filter={filter} setFilter={setFilter} />
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} number={number} setNumber={setNumber} />
      <h2>Names and Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
