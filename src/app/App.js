import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../input/input.js";
import Contacts from "../contacts/contacts.js";
import Filter from "../filter/filter.js";

import { FormLayout, Notification } from "../styledComponents/styledComponents.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      name: "",
      number: "",
      filter: "",
      notification: "",
    };
  }


  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    if (contactsLocal) {
      return this.setState(({contacts}) => ({
        contacts: JSON.parse(contactsLocal)
      }));
      // console.log(JSON.parse(contacts));
    }
  }

  // componentWillUnmount() {
  //   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  // }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getExistence = () => {
    return this.state.contacts.some(contact => {
      return contact.name === this.state.name;
    })
  }

  onHandleAdd = (event) => {
    event.preventDefault();
    let { name, number } = this.state;
    if (!name || !number) {
      return this.setState(({notification}) => ({
        notification: "Заполните все поля!"
      }));
    }
    if(this.getExistence()) {
      return this.setState(({notification}) => ({
        notification: "Такой контакт уже существует"
      }));
    }
    let validNameBool = this.getMatchName(name);
    let validNumBool = this.getMatchNum(number);
    this.handleCreation(validNameBool, validNumBool);
  };

  getMatchName = (name) => {
    const patternName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return patternName.test(name);
  } 

  getMatchNum = (num) => {
    const patternNum = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
    return patternNum.test(num);
  }

  handleCreation = async (validNameBool, validNumBool) => {
    if (validNameBool && validNumBool) {
      await this.createNewContact();
      await this.saveInLocalStorage();
    } else if (!validNameBool) {
        return this.setState(({notification}) => ({
        notification: "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      }));
    } else if (!validNumBool) {
        return this.setState(({notification}) => ({
        notification: "Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
      }));
    }
  }

  createNewContact = () => {
    let {name, number} = this.state;
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: uuidv4(), name, number }],
      name: '', number: '',
    }));
  }

  saveInLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }


  onFilter = () => {
      const {contacts, filter} = this.state;
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  }

  onDelete = (event) => {
    const {contacts} = this.state;
    const remaining = contacts.filter(contact => {
      return contact.id !== event.target.id
    })
    this.setState(({contacts}) => ({
      contacts: remaining}))
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  checkForNotifications = () => {
    if(this.state.notification) {
      setTimeout(() => {
        this.setState(({notification}) => ({
          notification: '',
        }));
      }, 3000);
      return <Notification><h2>{this.state.notification}</h2></Notification>
    }
  }

  render() {
    return (
      this.checkForNotifications() ||
      <FormLayout>
        <h1>Phonebook</h1>
        <Input
          value={this.state}
          onHandleInput={this.onHandleInput}
          onHandleAdd={this.onHandleAdd}
        />
        {this.state.contacts.length !== 0 ? (
          <Filter value={this.state} onHandleInput={this.onHandleInput} />
        ) : (
          <span>Kонтактов пока нет</span>
        )}
        <Contacts filter={this.onFilter} deleteFn={this.onDelete}/>
      </FormLayout>
      
    );
  }
}

export default App;
