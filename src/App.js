import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Title,
  SectionTitle,
} from "./components/Container/Container.styled.jsx";
import Form from "./components/Form/Form.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import Input from "./components/Input/Input.jsx";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  formSubmitHandle = ({ name, number }) => {
    const contact = { name, number, id: uuidv4() };

    this.state.contacts.find((savedContact) => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
    console.log(contact);
  };

  handleDelete = (contactId) => {
    console.log(contactId);
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normaliseFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form handleSubmit={this.formSubmitHandle} />
        <SectionTitle>Contacts</SectionTitle>
        <Input
          name="Find contacts by name"
          type="text"
          value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDelete}
        />
      </Container>
    );
  }
}
