import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, name, text, placeholder, className, checked, value, onChange, id, innerRef, errorMessage,
}) => (
  <div className={className}>
    <label htmlFor={id}>{text}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      checked={checked}
      placeholder={placeholder}
      onChange={onChange}
      ref={innerRef}
    />
    <small>{errorMessage}</small>
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  name: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
  errorMessage: propTypes.string,
  id: propTypes.string.isRequired,
  checked: propTypes.bool,
  onChange: propTypes.func,
  innerRef: propTypes.oneOfType([propTypes.object]),
  value: propTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  checked: false,
  value: '',
  name: '',
  errorMessage: '',
  onChange: null,
  innerRef: null,
};

export default Input;
