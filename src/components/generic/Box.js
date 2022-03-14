import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Box extends Component {
  render() {
    const { children, container, flex, column, padding, gap, ...rest } = this.props;

    let className = container ? 'container' : '';
    if (flex) className += ' is-flex';
    if (column) className += ' is-flex-direction-column';
    if (padding) className += ` p-${padding}`;

    return (
      <div
        className={ className }
        style={ { gap: `${gap}px` } }
        { ...rest }
      >
        {children}
      </div>
    );
  }
}

Box.propTypes = {
  children: PropTypes.node,
  flex: PropTypes.bool,
  container: PropTypes.bool,
  column: PropTypes.bool,
  padding: PropTypes.number,
  gap: PropTypes.number,
};

Box.defaultProps = {
  children: undefined,
  flex: false,
  column: false,
  container: true,
  padding: 0,
  gap: 0,
};
