import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Input from "../input/input.js";
import Contacts from "../contacts/contacts.js";
import Filter from "../filter/filter.js";

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
    };
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getExamineExistance = () => {
    return this.state.contacts.filter(contact => {
      return contact.name === this.state.name
    })
  }

  onHandleAdd = (event) => {
    event.preventDefault();
    const patternName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    const patternNum =
      /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/;
    let { name, number } = this.state;
    if (!name || !number) return alert("Заполните все поля!");
    if(this.getExamineExistance().length !== 0) return alert("Такой контакт уже существует")
    if (patternName.test(name) && patternNum.test(number)) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { id: uuidv4(), name, number }],
        name: '', number: ''
      }));
    } else if (!patternName.test(name)) {
      alert(
        "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      );
    } else if (!patternNum.test(number)) {
      alert(
        "Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
      );
    }
  };

  onFilter = () => {
      const {contacts, filter} = this.state;
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  }

  onDelete = (event) => {
    const {contacts} = this.state;
    const remaining = contacts.filter(contact => {
      return contact.id !== event.target.id
    })
    this.setState({contacts: remaining})
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default App;
