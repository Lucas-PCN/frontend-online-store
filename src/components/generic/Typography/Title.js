import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { children, ...rest } = this.props;

    return (
      <span
        className="title is-4 m-0"
        { ...rest }
      >
        {children}
      </span>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
