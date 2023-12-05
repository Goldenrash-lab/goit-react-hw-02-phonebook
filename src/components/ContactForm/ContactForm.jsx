import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handlerChangePhone = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onContactAdd(this.state.name, this.state.number);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Name</h4>
        <input
          onChange={this.handlerChangeName}
          type="text"
          name="name"
          value={this.state.name}
          required
        />
        <h4>Phone</h4>
        <input
          onChange={this.handlerChangePhone}
          type="tel"
          name="number"
          value={this.state.number}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
