import React from "react";
import { CustomForm } from "./Form.styled";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
    id: "",
  };

  handleSetInfo = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //   console.log(this.state);
  };

  handleAddContact = (e) => {
    e.preventDefault();

    this.props.handleSubmit(this.state);
    // console.log('Стейт формы>', this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "", id: "" });
  };

  render() {
    return (
      <CustomForm onSubmit={this.handleAddContact}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleSetInfo}
        />
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleSetInfo}
        />
        <Button type="submit" text="Add contact" />
      </CustomForm>
    );
  }
}
