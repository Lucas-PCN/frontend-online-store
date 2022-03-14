import React from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends React.Component {
  render() {
    const { clamp, children } = this.props;
    let className = 'subtitle is-4 m-0';
    if (clamp) className += ' clamp';

    return <span className={ className } { ...this.props }>{children}</span>;
  }
}

Subtitle.propTypes = {
  clamp: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Subtitle.defaultProps = {
  clamp: false,
};
