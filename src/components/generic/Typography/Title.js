import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render() {
    const { clamp, children } = this.props;
    let className = 'title is-4 m-0';
    if (clamp) className += ' clamp';

    return <span className={ className } { ...this.props }>{children}</span>;
  }
}

Title.propTypes = {
  clamp: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  clamp: false,
};
