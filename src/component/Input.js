import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, name, placeholder, className,
}) => (
  <div className={className}>
    <label htmlFor={name}>{name}</label>
    <input type={type} id={name} checked placeholder={placeholder} />
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  className: propTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
};

export default Input;
