import React from 'react';
import propTypes from 'prop-types';

const Input = ({ type, name, placeholder }) => (
  <div>
    <label htmlFor={name}>{name}</label>
    <input type={type} id={name} placeholder={placeholder}/>
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};
export default Input;
