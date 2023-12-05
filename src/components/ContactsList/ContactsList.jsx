import React, { Component } from 'react';

export default class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(el => (
          <li key={crypto.randomUUID()}>
            <h4>
              {el.name}: {el.number}
            </h4>
            <button onClick={() => this.props.onDelete(el.id)} type="button">
              DELETE
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
