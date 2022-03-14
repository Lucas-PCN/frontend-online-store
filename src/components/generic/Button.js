import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { is, loading, children, icon, ...rest } = this.props;

    let className = 'button is-flex is-align-items-center';
    if (is) className += ` is-${is}`;
    if (loading) className += ' is-loading';

    return (
      <button
        type="button"
        className={ className }
        { ...rest }
      >
        { icon && React.cloneElement(icon, {
          className: 'mr-1',
        }) }
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  is: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  icon: undefined,
  is: '',
  loading: false,
};
