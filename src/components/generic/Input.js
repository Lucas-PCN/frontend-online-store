import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className="control container">
        <input className="input" { ...this.props } />
      </div>
    );
  }
}
