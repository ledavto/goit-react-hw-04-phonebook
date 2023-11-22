import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

//rafce

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const strFromLocal = localStorage.getItem('array-contacts-data');
    // console.log(strFromLocal);
    const parsed = JSON.parse(strFromLocal);
    // console.log(parsed);
    if (strFromLocal)
      this.setState({
        contacts: parsed,
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      //Добавляем в локал сторедж
      localStorage.setItem(
        'array-contacts-data',
        JSON.stringify(this.state.contacts)
      );
      // console.log(this.state.contacts);
    }
  }

  addContacts = newCont => {
    const contObj = { id: nanoid(), ...newCont };

    this.setState(prev => {
      //Массив имен из объекта
      const arrName = [];
      for (const contacts of prev.contacts) {
        arrName.push(contacts.name);
      }

      //Проверка на наличие уже такого имени
      const arrNameLowerCase = arrName.map(elem => elem.toLowerCase());
      if (arrNameLowerCase.includes(newCont.name.toLowerCase())) {
        alert(`${newCont.name} is already in contacts`);
        return;
      }

      //Добавляем в State
      return {
        contacts: [...prev.contacts, contObj],
      };
    });
  };

  filterContacts = e => {
    this.setState({ filter: e });
  };

  deleteCont = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addCont={this.addContacts} />
        <h2>Contacts</h2>
        <Filter filterStr={this.filterContacts} />
        {this.state.contacts.length > 0 && (
          <ContactList
            listCont={this.state.contacts}
            filter={this.state.filter}
            deleteCont={this.deleteCont}
          />
        )}
      </div>
    );
  }
}
