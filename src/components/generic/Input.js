import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className="control">
        <input className="input" { ...this.props } />
      </div>
    );
  }
}
