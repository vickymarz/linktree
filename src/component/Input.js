import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, name, placeholder, className, checked, onChange, id,
}) => (
  <div className={className}>
    <label htmlFor={id}>{name}</label>
    <input type={type} id={id} checked={checked} placeholder={placeholder} onChange={onChange} />
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  className: propTypes.string,
  id: propTypes.string.isRequired,
  checked: propTypes.bool,
  onChange: propTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  className: '',
  checked: '',
  onChange: '',
};

export default Input;
