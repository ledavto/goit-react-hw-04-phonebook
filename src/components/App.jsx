// import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useState, useEffect } from 'react';

//rafce

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

  //Один раз при монтировании
  useEffect(() => {
    // console.log('Mouting phase: 1 Step');
    const strFromLocal = localStorage.getItem('array-contacts-data');
    // console.log(strFromLocal);
    const parsed = JSON.parse(strFromLocal);
    if (strFromLocal) setContacts([...parsed]);
  }, []);

  useEffect(() => {
    // console.log('Updating phase: same when componentDidUpdate runs');
    if (contacts.length > 0)
      localStorage.setItem(
        'array-contacts-data',
        JSON.stringify([...contacts])
      );
  }, [contacts]);

  const addContacts = newCont => {
    if (newCont.name) {
      const contObj = { id: nanoid(), ...newCont };

      //Массив имен из объекта
      const arrName = [];
      for (const contact of contacts) {
        arrName.push(contact.name);
      }

      //Проверка на наличие уже такого имени
      const arrNameLowerCase = arrName.map(elem => elem.toLowerCase());
      if (arrNameLowerCase.includes(newCont.name.toLowerCase())) {
        alert(`${newCont.name} is already in contacts`);
        return;
      }

      setContacts([...contacts, contObj]);
      console.log(contacts);
    }
  };

  const filterContacts = e => {
    setFilter(e);
  };

  const deleteCont = id => {
    setContacts(contacts.filter(el => el.id !== id));

    // this.setState(prev => ({
    //   contacts: prev.contacts.filter(el => el.id !== id),
    // }));
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addCont={addContacts} />
      <h2>Contacts</h2>
      <Filter filterStr={filterContacts} />
      {contacts.length > 0 && (
        <ContactList
          listCont={contacts}
          filter={filter}
          deleteCont={deleteCont}
        />
      )}
    </div>
  );
};
